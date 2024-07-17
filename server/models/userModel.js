import { Database } from "../db/database.js";

export class UserModel {

    static async getUserData({ email }) {
        const result = await Database.query(
            `CALL getUserData(?)`,
            [email]
        )
        return result
    }

    static async registerUser({ profileType, name, email, passwordCrypt }) {
        const result = await Database.query(
            `CALL registerUser(?, ?, ?, ?)`,
            [profileType, name, email, passwordCrypt]
        )
        return result
    }

    static async getAllUsers() {
        return await Database.query(`CALL getAllUsers`)
    }
}