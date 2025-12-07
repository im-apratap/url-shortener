import axiosInstance from "../utils/axiosInstance"

export const createShorturl = async(url)=>{
    const { data } = await axiosInstance.post("/create", { url })
    return data
}