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

export const AboutmeFormSchema = z.object({
    header: z.string().min(1),
    description: z.string().min(1),
    schools: z.string().optional().nullable(),
    collages: z.string().optional().nullable(),
})

export const LearningJourneyFormSchema = z.object({
    header: z.string().min(1),
    description: z.string().min(1),
})


export const ProjectFormSchema = z.object({
    images: z.object({ url: z.string() }).array().min(1),
    projectName: z.string().min(1),
    technologies: z.string().min(1),
    aboutProject: z.string().min(1),
    liveDemoLink: z.string().url().optional().nullable(),
    websiteLink: z.string().url().optional().nullable(),
    githubLink: z.string().url(),
    gitlabLink: z.string().url().optional().nullable(),
    bitbucketLink: z.string().url().optional().nullable(),
    projectType: z.string().min(1),
})


export const SkillFormSchema = z.object({
    name: z.string().min(1),
    imageUrl: z.string().min(1),
})
