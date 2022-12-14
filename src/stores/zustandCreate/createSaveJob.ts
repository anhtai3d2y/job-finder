import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface SaveJobsState {
    saveJobs: object[];
    saveJob: object;
    isLoadingSaveJobs: boolean;
    getSaveJobs: () => void;
    getSaveJobById: (id: string) => void;
    addSaveJob: (jobId: string) => void;
    deleteSaveJob: (jobId: string) => void;
}

const createSaveJobs: StoreSlice<SaveJobsState> = (set, get) => ({
    saveJobs: [],
    saveJob: {},
    isLoadingSaveJobs: false,
    getSaveJobs: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.saveJobs);
            const data = res.data.data;
            set({
                saveJobs: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Save Job Error!",
                text2: error.response.data.message,
            });
        }
    },
    getSaveJobById: async (id: string) => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.saveJobs + `/${id}`,
            );
            const data = res.data.data;
            set({
                saveJob: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Save Job Error!",
                text2: error.response.data.message,
            });
        }
    },
    addSaveJob: async (jobId: string) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.saveJobs, {
                jobId,
            });
            const data = res.data.data;
            set({
                saveJob: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Save Job Error!",
                text2: error.response.data.message,
            });
        }
    },
    deleteSaveJob: async (jobId: string) => {
        try {
            const res = await axiosClient.delete(
                API_URL + EndpointApi.saveJobs + `/${jobId}`,
            );
            const data = res.data.data;
            set({
                saveJob: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Delete Save Job Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createSaveJobs;
