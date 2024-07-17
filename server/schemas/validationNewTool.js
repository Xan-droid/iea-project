import { z } from 'zod'

const toolSchema = z.object({
    name: z.string({ message: "Asegúrate de ingresar un texto" }).min(1, { message: "Asegúrate de ingresar un texto" })
})

export const validateNewTool = (toolData) => {
    return toolSchema.safeParse(toolData)
}
