import { ComponentModel } from '../models/componentModel.js';
import { validateNewComponent } from '../schemas/validationNewComponent.js';
import jwt from 'jsonwebtoken';

export class ComponentController {

    static async registerComponent(req, res) {

        const isValidComponent = validateNewComponent(req.body)
        if (!isValidComponent.success) {
            const errors = isValidComponent.error.formErrors.fieldErrors
            return res.status(422).json({ errors: errors, message: 'La información contiene errores.' })
        }

        const { name, units } = req.body
        const newComponent = await ComponentModel.registerComponent({ name, units })
        return res.status(200).json({ message: 'Componente agregado correctamente.' })
    }

    static async getAllComponents(req, res) {
        const allComponents = await ComponentModel.getAllComponents()
        res.status(200).json({ data: allComponents })
    }
    static async getComponentsByUser(req, res) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const userId = data.userId
            const componentsByUser = await ComponentModel.getComponentsByUser({ userId })
            res.status(200).json({ data: componentsByUser })
        } catch (error) {
            return res.status(403).json({ message: 'Acceso no autorizado' })
        }
    }

    static async getComponentsAvailable(req, res) {
        const componentsAvailable = await ComponentModel.getComponentsAvailable()
        return res.status(200).json({ data: componentsAvailable })
    }

    static async componentRequest(req, res) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const userId = data.userId
            const { componentId } = req.body
            const request = await ComponentModel.requestComponent({ componentId, userId })
            return res.status(200).json({ message: 'Componente solicitado correctamente.' })
        } catch (error) {
            return res.status(403).json({ message: 'Error de solicitud' })
        }

    }
}