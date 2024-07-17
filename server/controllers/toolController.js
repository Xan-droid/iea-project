import { ToolModel } from '../models/toolModel.js';
import { validateNewTool } from '../schemas/validationNewTool.js';
import jwt from 'jsonwebtoken';


export class ToolController {

    static async registerTool(req, res) {

        const isValidUser = validateNewTool(req.body)
        if (!isValidUser.success) {
            const errors = isValidUser.error.formErrors.fieldErrors
            return res.status(422).json({ errors: errors, message: 'La información contiene errores.' })
        }

        const { name } = req.body
        const newTool = await ToolModel.registerTool({ name })
        return res.status(200).json({ message: 'Herramienta agregada correctamente.' })
    }

    static async getAllTools(req, res) {
        const allTools = await ToolModel.getAllTools()
        res.status(200).json({ data: allTools })
    }

    static async getToolsByUser(req, res) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const userId = data.userId
            const toolsByUser = await ToolModel.getToolsByUser({ userId })
            res.status(200).json({ data: toolsByUser })
        } catch (error) {
            return res.status(403).json({ message: 'Acceso no autorizado' })
        }
    }

    static async getToolsAvailable(req, res) {
        const toolsAvailable = await ToolModel.getToolsAvailable()
        return res.status(200).json({ data: toolsAvailable })
    }

    static async toolRequest(req, res) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const userId = data.userId
            const { toolId } = req.body
            const request = await ToolModel.requestTool({ toolId, userId })
            return res.status(200).json({ message: 'Herramienta solicitada correctamente.' })
        } catch (error) {
            return res.status(403).json({ message: 'Error de solicitud' })
        }

    }
}