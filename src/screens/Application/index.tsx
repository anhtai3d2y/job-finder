import {useEffect, useState} from "react";
import {ScrollView, Text, View} from "react-native";
import shallow from "zustand/shallow";
import JobCard from "../../components/JobCard";
import TinyLogo from "../../components/TinyLogo";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Job";
export default function ApplicationScreen({route, navigation}) {
    const getApplications = useStore(state => state.getApplications);
    const applications = useStore(state => state.applications, shallow);
    const [applicationInfo, setApplicationInfo] = useState([]);
    useEffect(() => {
        getApplications();
    }, []);

    useEffect(() => {
        setApplicationInfo(applications);
    }, [applications]);
    return (
        <View style={styles.container}>
            <TinyLogo />
            <View style={{height: height * 0.84}}>
                <ScrollView style={{height: height}}>
                    {applicationInfo && applicationInfo.length > 0 ? (
                        applicationInfo.map((application, index) => (
                            <JobCard
                                key={application._id}
                                job={application.jobs}
                                status={"disable"}
                                statusApply={"true"}
                                navigation={navigation}
                            />
                        ))
                    ) : (
                        <Text>No job application</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}
