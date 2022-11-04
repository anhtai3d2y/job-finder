import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface ProfilesState {
    profile: object;
    isLoadingProfile: boolean;
    addProfile: (body: any) => void;
    getProfile: () => void;
}

const createProfiles: StoreSlice<ProfilesState> = (set, get) => ({
    profile: {},
    isLoadingProfile: false,
    addProfile: async (body: any) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.profiles,
                body,
            );
            const data = res.data.data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Profile Error!",
                text2: error.response.data.message,
            });
        }
    },
    getProfile: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.profiles);
            const data = res.data.data[0];
            set({
                profile: data,
            });
            return data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Profile Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createProfiles;
