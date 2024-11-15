import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../../config/storage";
import { toast } from "react-toastify";





export const useRegisterUser = () => {
    return useMutation({
        mutationFn: (data) => request.post("/register", data).then((res) => res.data),
        onSuccess: (data) => {
            saveState("userData", data); // foydalanuvchi ma’lumotlarini saqlash
            toast.success("Sign in successful!");
        },
        onError: () => {
            toast.error("Sign-up failed, please try again.");
        }
    });
};