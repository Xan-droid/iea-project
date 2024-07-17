import { UserModel } from "../models/userModel.js";
import { validateUser } from '../schemas/validationUser.js';
import { validateNewUser } from "../schemas/validationNewUser.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {

    static async validateUser(req, res) {
        const { email, password } = req.body
        const isValidUser = validateUser(req.body)
        if (!isValidUser.success) {
            const errors = isValidUser.error.formErrors.fieldErrors
            return res.status(422).json({ errors: errors, message: 'La información contiene errores.' })
        }

        const user = await UserModel.getUserData({ email })
        if (!user.length) {
            return res.status(400).json({ message: 'Usuario no registrado en sistema. Contacta a un administrador.' })
        }
        const userData = user[0]
        const emailUserData = userData.email
        const nameUserData = userData.name
        const passwordUserData = userData.password
        const profileType = userData.profileType
        const userId = userData.userId
        const isValidPassword = await bcrypt.compare(password, passwordUserData)

        if (!isValidPassword) {
            const errors = { password: ['Contraseña incorrecta.'] }
            return res.status(422).json({ errors: errors, message: 'La información contiene errores.' })
        }

        const token = jwt.sign(
            {
                email: emailUserData,
                name: nameUserData,
                profile: profileType,
                userId: userId
            },
            'aquivalacontrasenasupersecretaimposiblededecodificar',
            {
                expiresIn: '1h'
            })

        return res
            .status(200)
            .send({ message: 'Usuario correcto.', token: token, profileType: profileType })
    }

    static async getUserProfile(req, res) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const profile = data.profile
            return res.status(200).json({ profile: profile })
        } catch (error) {
            return res.status(403).json({ message: 'Acceso no autorizado' })
        }
    }

    static async getUserName(req, res) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token)
            return res.status(403).json({ message: 'Acceso no autorizado' })

        try {
            const data = jwt.verify(token, 'aquivalacontrasenasupersecretaimposiblededecodificar')
            const name = data.name
            return res.status(200).json({ name: name })
        } catch (error) {
            return res.status(403).json({ message: 'Acceso no autorizado' })
        }
    }

    static async registerUser(req, res) {

        const isValidUser = validateNewUser(req.body)
        if (!isValidUser.success) {
            const errors = isValidUser.error.formErrors.fieldErrors
            return res.status(422).json({ errors: errors, message: 'La información contiene errores.' })
        }

        const { profileType, name, email, password } = req.body
        const passwordCrypt = await bcrypt.hash(password, 10)
        const newUser = await UserModel.registerUser({ profileType, name, email, passwordCrypt })
        return res.status(200).json({ message: 'Usuario agregado correctamente.' })
    }

    static async getAllUsers(req, res) {
        const allUsers = await UserModel.getAllUsers()
        res.status(200).json({ data: allUsers })
    }
}