import mysql from 'mysql2/promise';

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'ieamanagement'
}

let connection = ''

try {
    connection = await mysql.createConnection(dbConfig)
} catch (error) {
    throw new Error('Error al conectar con la base de datos.');
}

export class Database {

    static async query(query, params = []) {
        try {
            const [result, info] = await connection.query(query, params)
            return result[0];
        } catch (error) {
            throw new Error(error);
        }
    }

    static async close() {
        if (connection) {
            try {
                await connection.end();
            } catch (error) {
                throw new Error('Error al cerrar la conexión');
            }
        }
    }
}

