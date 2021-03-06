const sqlite3 = window.require('sqlite3')
const Promise = window.require('bluebird');

class AppDAO {
    constructor(dbFilePath) {
        console.log('realizando conexion')
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        })
    }

    run(sql, params = []) {
        console.log('run sql')
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            })
        })
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, result) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            console.log('peticion db.all')
            this.db.all(sql, params, (err, rows) => {
                console.log('adentro db.all')
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    console.log(rows)
                    resolve(rows)
                }
            })
        })
    }
}

export default AppDAO