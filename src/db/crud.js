class Crud {
    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS user (
        DT INTEGER PRIMARY KEY,
        user TEXT,
        password TEXT)`
        return this.dao.run(sql);
    }

    insert(user, password, dt) {
        return this.dao.run(
            'INSERT INTO user (DT, user, password) VALUES (?,?,?)',
            [dt, user, password]);
    }

    delete(dt) {
        return this.dao.run(
            `DELETE FROM user WHERE DT = ?`,
            [dt]
        );
    }

    getAll() {
        return this.dao.all(`SELECT * FROM user`);
    }
}

export default Crud;