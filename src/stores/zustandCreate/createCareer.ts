import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface CareersState {
    careers: object[];
    career: object;
    isLoadingCareers: boolean;
    getCareers: () => void;
    getCareerById: (id: string) => void;
}

const createCareers: StoreSlice<CareersState> = (set, get) => ({
    careers: [],
    career: {},
    isLoadingCareers: false,
    getCareers: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.careers);
            const data = res.data.data;
            console.log("data: ", data);
            set({
                careers: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Career Error!",
                text2: error.response.data.message,
            });
        }
    },
    getCareerById: async (id: string) => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.careers + `/${id}`,
            );
            const data = res.data.data;
            set({
                career: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Career Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createCareers;
