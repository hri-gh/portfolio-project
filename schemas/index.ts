import * as z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
    username: z.string().min(1, {
        message: "Name is required",
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});


export const GridContentFormSchema = z.object({
    header: z.string().min(1),
    title: z.string().min(1),
    classes: z.string().min(1),
    icon: z.string().min(1)
})
