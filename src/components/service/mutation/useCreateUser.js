import { toast } from "react-toastify";
import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../../config/storage";



export const useCreateLogin = () => {
    return useMutation({
        mutationFn: (data) => request.post("/login", data).then((res) => res.data),
        onSuccess: (data) => {
            saveState("token", data);
            saveState("userData", data);
            toast.success("Sign in successful!");
        },
        onError: () => {
            toast.error("Sign in failed, please try again.")
        }
    })
}