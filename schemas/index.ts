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
    schools: z.string().optional(),
    collages: z.string().optional()
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
    liveDemoLink: z.string().optional(),
    websiteLink: z.string().optional(),
    githubLink: z.string().url(),
    gitlabLink: z.string().optional(),
    bitbucketLink: z.string().optional(),
    projectType: z.string().min(1),
})


export const SkillFormSchema = z.object({
    name: z.string().min(1),
    imageUrl: z.string().min(1),
})

export const CertificateFormSchema = z.object({
    provider: z.string().min(1),
    title: z.string().min(1),
    imageUrl: z.string().min(1),
    providerLogoUrl: z.string().min(1).optional().nullable(),
})

export const PublicProfileFormSchema = z.object({
    imageUrl: z.string().min(1),
    publicProfileName: z.string().min(1),
    publicProfileLink: z.string().min(1),

})

export const BadgeFormSchema = z.object({
    imageUrl: z.string().min(1),
    platformName: z.string().min(1),
    platformLink: z.string().min(1),

})
