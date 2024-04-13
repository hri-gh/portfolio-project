"use client"

import * as z from "zod"
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

// UI COMPONENTS
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { AlertModal } from "@/components/modals/alert-modal";

// ICONS
import { Trash } from "lucide-react";

// PRISMA
import { AboutMe } from "@prisma/client";

// SCHEMA
import { AboutmeFormSchema } from "@/schemas";

type AboutmeFormValues = z.infer<typeof AboutmeFormSchema>

interface IAboutmeFormProps {
    initialData: AboutMe | null;
};


export const AboutmeForm: React.FC<IAboutmeFormProps> = ({ initialData }) => {
    const params = useParams()
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Content" : "Create Content"
    const description = initialData ? "Edit a content" : "Add a new content"
    const toastMessage = initialData ? "Content updated" : "Content created"
    const action = initialData ? "Save changes" : "Create"



    const form = useForm<AboutmeFormValues>({
        resolver: zodResolver(AboutmeFormSchema),
        defaultValues: initialData || {
            header: '',
            description: '',
            schools:'',
            collages:'',
        }
    });


    const onSubmit = async (data: AboutmeFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/about-me/${params.aboutmeId}`, data);
            } else {
                await axios.post(`/api/about-me`, data);
            }
            router.push(`/admin/home-contents/about-me`)
            router.refresh();
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        console.log('Delete Content');

    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading
                    title={title}
                    description={description}
                />
                {/* Delete Button */}
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="grid grid-cols-3 gap-8">

                        {/* HEADER FILED */}
                        <FormField
                            control={form.control}
                            name="header"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Header</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="AboutMe header" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* DESCRIPTION FILED */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="AboutMe description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* SCHOOLS FILED OPTIONAL */}
                        <FormField
                            control={form.control}
                            name="schools"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Schools (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Abc, Xyz..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* COLLAGES FILED OPTIONAL */}
                        <FormField
                            control={form.control}
                            name="collages"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Collages (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Abc, Xyz..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
            {/* <Separator /> */}
        </>
    )
}
