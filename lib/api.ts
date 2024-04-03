import axios from "axios";
import { LoginSchema } from "@/schemas";
import { z } from "zod"


export const verifyPassword = async (values: z.infer<typeof LoginSchema>) => {
    try {
        const response = await axios.post("http://localhost:3000/api/user/login", values);
        return response.data;
    } catch (error:any) {
        console.log(error.message)
    }
}
