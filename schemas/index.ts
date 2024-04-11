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

export const OverviewFormSchema = z.object({
    header: z.string().min(1),
    description: z.string().min(1),
})


export const ProjectFormSchema = z.object({
    images: z.object({ url: z.string() }).array().min(1),
    projectName: z.string().min(1),
    technologies: z.object({ url: z.string() }).array().min(1),
    aboutProject: z.string().min(1),
    liveDemoLink: z.string().url("Live demo link must be a valid URL").optional(),
    websiteLink: z.string().url("Website link must be a valid URL").optional(),
    githubLink: z.string().url("Github link must be a valid URL"),
    gitlabLink: z.string().url("Gitlab link must be a valid URL").optional(),
    bitbucketLink: z.string().url("BitBucket link must be a valid URL").optional(),
    projectType: z.string().min(1),
})
