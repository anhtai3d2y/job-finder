import {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import shallow from "zustand/shallow";
import JobCard from "../../components/JobCard";
import TinyLogo from "../../components/TinyLogo";
import {height} from "../../constants/Layout";
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
            <View style={{height: height * 0.84}}>
                <ScrollView style={{height: height}}>
                    {saveJobInfo && saveJobInfo.length > 0 ? (
                        saveJobInfo.map((saveJob, index) => (
                            <JobCard
                                key={saveJob._id}
                                job={saveJob.jobs}
                                status={"true"}
                                statusApply={"false"}
                                navigation={navigation}
                            />
                        ))
                    ) : (
                        <Text style={{marginTop: 20}}>No save job</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}
