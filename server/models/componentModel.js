import { Database } from "../db/database.js";

export class ComponentModel {

    static async registerComponent({ name, units }) {
        const result = await Database.query(
            `CALL registerComponent(?, ?)`,
            [name, units]
        )
        return result
    }

    static async getAllComponents() {
        return await Database.query(`CALL getAllComponents`)
    }

    static async getComponentsByUser({ userId }) {
        return await Database.query(
            `CALL getComponentsByUser(?)`,
            [userId]
        )
    }

    static async getComponentsAvailable() {
        return await Database.query(`CALL getComponentsAvailable`)
    }

    static async requestComponent({ componentId, userId }) {
        return await Database.query(
            `CALL requestComponent(?,?)`,
            [componentId, userId]
        )
    }

}
