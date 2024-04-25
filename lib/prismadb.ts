import { PrismaClient } from "@prisma/client"

// declare global {
//     var prisma: PrismaClient | undefined
// };

// const prismadb = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

const prismadb = new PrismaClient()


export default prismadb;
