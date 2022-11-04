import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import styles from "../../themes/screens/Job";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import {useEffect, useState} from "react";
import colors from "../../constants/Colors";
import {Feather, Ionicons, Octicons} from "@expo/vector-icons";
import JobCard from "../../components/JobCard";
export default function JobScreen({route, navigation}) {
    const getUserProfile = useStore(state => state.getUserProfile);
    const userProfile = useStore(state => state.userProfile, shallow);
    const [user, setUser] = useState({});
    const getJobs = useStore(state => state.getJobs);
    const jobs = useStore(state => state.jobs, shallow);
    const [listJobs, setListJobs] = useState({});

    useEffect(() => {
        getUserProfile();
        getJobs();
    }, []);

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    useEffect(() => {
        setListJobs(jobs);
        console.log("jobs: ", jobs);
    }, [jobs]);
    return (
        <View style={styles.container}>
            <TinyLogo />
            <View style={styles.avatarContainer}>
                <View style={styles.messageHeader}>
                    <View>
                        <Image
                            source={{
                                uri: user?.avatar?.secureURL,
                            }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 500,
                                borderWidth: 4,
                                borderColor: "#fff",
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.bioText}>Hello 👋</Text>
                    <Text style={styles.textInfo}>{user.name}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={24} color="black" />
                    <Text style={styles.searchText}>
                        Search for a job or company
                    </Text>
                    <Ionicons
                        name="options-outline"
                        size={24}
                        color={colors.blueColor}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.jobContainer}>
                <View style={styles.jobHeader}>
                    <Text style={styles.jobHeaderText}>Recommendation</Text>
                </View>
                <View style={styles.jobContent}>
                    <ScrollView>
                        {listJobs && listJobs.length > 0 ? (
                            listJobs.map((job, index) => (
                                <JobCard
                                    key={job._id}
                                    job={job}
                                    navigation={navigation}
                                />
                            ))
                        ) : (
                            <Text>No job Recommendation</Text>
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
