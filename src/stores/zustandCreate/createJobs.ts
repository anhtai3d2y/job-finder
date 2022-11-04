import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface JobsState {
    jobs: object[];
    job: object;
    isLoadingJobs: boolean;
    getJobs: () => void;
    getJobById: (id: string) => void;
}

const createJobs: StoreSlice<JobsState> = (set, get) => ({
    jobs: [],
    job: {},
    isLoadingJobs: false,
    getJobs: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.jobs);
            const data = res.data.data;
            set({
                jobs: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Job Error!",
                text2: error.response.data.message,
            });
        }
    },
    getJobById: async (id: string) => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.jobs + `/${id}`,
            );
            const data = res.data.data;
            set({
                job: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Job Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createJobs;
