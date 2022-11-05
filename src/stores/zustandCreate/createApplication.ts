import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface ApplicationsState {
    applications: object[];
    application: object;
    isLoadingApplications: boolean;
    getApplications: () => void;
    getApplicationById: (id: string) => void;
    addApplication: (jobId: string) => void;
    deleteApplication: (jobId: string) => void;
}

const createApplications: StoreSlice<ApplicationsState> = (set, get) => ({
    applications: [],
    application: {},
    isLoadingApplications: false,
    getApplications: async () => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.applications,
            );
            const data = res.data.data;
            set({
                applications: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Application Error!",
                text2: error.response.data.message,
            });
        }
    },
    getApplicationById: async (id: string) => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.applications + `/${id}`,
            );
            const data = res.data.data;
            set({
                application: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Application Error!",
                text2: error.response.data.message,
            });
        }
    },
    addApplication: async (jobId: string) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.applications,
                {
                    jobId,
                },
            );
            const data = res.data.data;
            set({
                application: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Application Error!",
                text2: error.response.data.message,
            });
        }
    },
    deleteApplication: async (jobId: string) => {
        try {
            const res = await axiosClient.delete(
                API_URL + EndpointApi.applications + `/${jobId}`,
            );
            const data = res.data.data;
            set({
                application: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Delete Application Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createApplications;
