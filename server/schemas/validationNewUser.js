import { z } from 'zod'

const userSchema = z.object({
    email: z.string().email({ message: "Formato de email inválido" }),
    password: z.string().min(8, { message: "Asegúrate de ingresar mínimo 8 caracteres" }),
    name: z.string({ message: "Asegúrate de ingresar un texto" }).min(1, { message: "Asegúrate de ingresar un texto" })
})

export const validateNewUser = (userData) => {
    return userSchema.safeParse(userData)
}
