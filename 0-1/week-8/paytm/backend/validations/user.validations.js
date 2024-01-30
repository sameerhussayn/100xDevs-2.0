import {z} from 'zod'

export const signUpValidations = z.object({
    userName: z.string({
        required_error: "username is required"
    }).email().max(30),
    firstName: z.string({
        required_error: "firstname is required"
    }).max(30),
    lastName: z.string({
        required_error: "lastname is required"
    }).max(30),
    password: z.string().min(6)
})

export const updateValidations = z.object({
    firstName: z.string().max(30).optional(),
    lastName: z.string().max(30).optional(),
    password: z.string().min(6).optional()
})