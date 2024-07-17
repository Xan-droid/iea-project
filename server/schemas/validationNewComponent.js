import { z } from 'zod'

const componentSchema = z.object({
    name: z.string({ message: "Asegúrate de ingresar un texto" }).min(1, { message: "Asegúrate de ingresar un texto" }),
    units: z.string({ message: "Asegúrate de ingresar un texto" }).min(1, { message: "Asegúrate de ingresar un número" })
})

export const validateNewComponent = (componentData) => {
    return componentSchema.safeParse(componentData)
}
