import { endpoints, instance } from "./Api";


export const getFilters = async()=>{
    try {
        const res = await instance.get(endpoints.filters);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}