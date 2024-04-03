"use client"
import React from 'react'

import { z } from "zod"
import { useForm, } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from '@/schemas'

import { verifyPassword } from '@/lib/api'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const LoginForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { formState: { isSubmitting, errors } } = form

    // 2.
    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        try {

            await new Promise(resolve => setTimeout(resolve, 5000));
            const data = await verifyPassword(values)
            console.log(data);

        } catch (err) {
            console.log('error', err);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="john.doe@example.com"
                                    type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="*****"
                                    type='password'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                {errors.email && <span>{errors.email.message}</span>}
                </div>
                <Button className='w-full' disabled={isSubmitting} type="submit">{isSubmitting ? "Submiting..." : "Submit"}</Button>
            </form>
        </Form>
    )
}

export default LoginForm
