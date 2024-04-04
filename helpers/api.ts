import axios from "axios";
import { LoginSchema } from "@/schemas";
import { z } from "zod"

interface ApiError {
    code: number;
    message: string;
}

export const verifyPassword = async (values: z.infer<typeof LoginSchema>) => {
    try {
        const response = await axios.post("http://localhost:3000/api/user/login", values);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof axios.AxiosError && error.response) {
            const apiError: ApiError = {
                code: error.response.status,
                message: error.response.data.message,
            };
            console.log("API Error:", apiError);
            throw new Error(apiError.code + " : " + apiError.message);
        } else {
            console.log("Unexpected error:", error);
            throw new Error("An unexpected error occurred");
        }
        // console.log("ERROR::", error);
        // if(error.response){
        //     throw new Error(error.response.status + ' : '+ error.response.data.message);
        // }
        // else{
        //     throw new Error('Server is not responding');
        // }
        // console.log("ERROR::",  error.response.status, error.message);
        //throw new Error(error.response.statusText || 'An unexpected error occurred');
    }
}


