import { Database } from "../db/database.js";

export class ToolModel {

    static async registerTool({ name }) {
        const result = await Database.query(
            `CALL registerTool(?)`,
            [name]
        )
        return result
    }

    static async getAllTools() {
        return await Database.query(`CALL getAllTools`)
    }

    static async getToolsByUser({ userId }) {
        return await Database.query(
            `CALL getToolsByUser(?)`,
            [userId]
        )
    }

    static async getToolsAvailable() {
        return await Database.query(`CALL getsToolsAvailable`)
    }

    static async requestTool({ toolId, userId }) {
        return await Database.query(
            `CALL requestTool(?,?)`,
            [toolId, userId]
        )
    }
}