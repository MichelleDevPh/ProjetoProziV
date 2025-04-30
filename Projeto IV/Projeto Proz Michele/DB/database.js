let db;

async function initDB() {
  const SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
  });

  db = new SQL.Database();
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    );
  `);

  // Usuário de teste
  db.run("INSERT OR IGNORE INTO usuarios (email, senha) VALUES (?, ?)", ["admin@exemplo.com", "123456"]);
}

function validarCredenciais(email, senha) {
  const result = db.exec("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha]);
  return result.length > 0;
}

// Inicializa o banco e expõe a função global
(async () => {
  await initDB();
  window.validarCredenciais = validarCredenciais;
})();