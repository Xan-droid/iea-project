import {z} from 'zod'

const userSchema = z.object({
    email: z.string().email({message: "Formato de email inválido"}),
    password: z.string().min(8, {message: "Asegúrate de ingresar mínimo 8 caracteres"})
})

export const validateUser = (userData) => {
    return userSchema.safeParse(userData)
}
