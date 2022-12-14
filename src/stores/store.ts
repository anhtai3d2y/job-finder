import create, {GetState, SetState} from "zustand";
import createAuth from "./zustandCreate/createAuth";
import createDislikeUser from "./zustandCreate/createDislikeUser";
import createLikeUser from "./zustandCreate/createLikeUser";
import createLocation from "./zustandCreate/createLocation";
import createMatches from "./zustandCreate/createMatches";
import createProfiles from "./zustandCreate/createProfiles";
import createMessages from "./zustandCreate/createProfiles";
import createPaypal from "./zustandCreate/createPaypal";
import createSuperlikeStar from "./zustandCreate/createSuperlikeStar";
import createSuperlikeUser from "./zustandCreate/createSuperlikeUser";
import createThreads from "./zustandCreate/createThreads";
import createUser from "./zustandCreate/createUser";
import createVerification from "./zustandCreate/createVerification";
import createJobs from "./zustandCreate/createJobs";
import createApplications from "./zustandCreate/createApplication";
import createSaveJobs from "./zustandCreate/createSaveJob";
import createCareers from "./zustandCreate/createCareer";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createAuth(set, get),
    ...createUser(set, get),
    ...createVerification(set, get),
    ...createLikeUser(set, get),
    ...createDislikeUser(set, get),
    ...createSuperlikeUser(set, get),
    ...createSuperlikeStar(set, get),
    ...createMatches(set, get),
    ...createThreads(set, get),
    ...createMessages(set, get),
    ...createPaypal(set, get),
    ...createLocation(set, get),
    ...createProfiles(set, get),
    ...createJobs(set, get),
    ...createApplications(set, get),
    ...createSaveJobs(set, get),
    ...createCareers(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
