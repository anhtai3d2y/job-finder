import {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import shallow from "zustand/shallow";
import JobCard from "../../components/JobCard";
import TinyLogo from "../../components/TinyLogo";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Job";
export default function SaveJobScreen({route, navigation}) {
    const getSaveJobs = useStore(state => state.getSaveJobs);
    const saveJobs = useStore(state => state.saveJobs, shallow);
    const [saveJobInfo, setSaveJobInfo] = useState([]);
    useEffect(() => {
        getSaveJobs();
    }, []);

    useEffect(() => {
        setSaveJobInfo(saveJobs);
    }, [saveJobs]);
    return (
        <View style={styles.container}>
            <TinyLogo />
            <View>
                <ScrollView>
                    {saveJobInfo && saveJobInfo.length > 0 ? (
                        saveJobInfo.map((saveJob, index) => (
                            <JobCard
                                key={saveJob._id}
                                job={saveJob.jobs}
                                navigation={navigation}
                            />
                        ))
                    ) : (
                        <Text>No job saveJob</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}
