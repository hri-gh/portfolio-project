import axios from "axios";
import { LoginSchema } from "@/schemas";
import { z } from "zod"
import toast from "react-hot-toast";


// Used in components/auth/login-form.ts
export const verifyPassword = async (values: z.infer<typeof LoginSchema>) => {
    try {
        const response = await axios.post("/api/user/login", values);
        return response.data;
    } catch (error: unknown) {
        // console.log("ERROR::", error);
        toast.error("Something went wrong");
        throw error;
    }
}
