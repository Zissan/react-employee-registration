function connection() {
  return openDatabase(
    "TurboSystems",
    "1.0",
    "Employee Details",
    2 * 1024 * 1024
  );
}

export function saveEmployee(employee) {
  let db = connection();
  db.transaction(function(tx) {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS EMPLOYEE (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, gender TEXT, dob TEXT)`
    );
    tx.executeSql(`INSERT INTO EMPLOYEE (name, gender, dob) VALUES (?,?,?)`, [
      employee.name,
      employee.gender,
      employee.dob
    ]);
  });
}

export function loadEmployees(fomatter) {
  let db = connection();
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM EMPLOYEE", [], fomatter, null);
  });
}
