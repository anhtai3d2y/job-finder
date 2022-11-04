import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {
    Button,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import shallow from "zustand/shallow";
import TinyLogo from "../../../components/TinyLogo";
import colors from "../../../constants/Colors";
import useStore from "../../../stores/store";
import styles from "../../../themes/screens/JobDetail";
export default function JobDetailScreen({route, navigation}) {
    const {id} = route.params;
    const getJobById = useStore(state => state.getJobById);
    const job = useStore(state => state.job, shallow);
    const [jobInfo, setJobInfo] = useState({});
    useEffect(() => {
        getJobById(id);
    }, []);

    useEffect(() => {
        setJobInfo(job);
        console.log("job: ", job);
    }, [job]);

    const handleBack = () => {
        navigation.pop();
    };
    const handleSaveJob = () => {
        console.log("save job: ", job._id);
    };
    return (
        <View style={styles.container}>
            <TinyLogo />
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons
                            name="arrow-back-sharp"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={handleSaveJob}>
                        <Feather
                            name="bookmark"
                            size={24}
                            color={colors.blueColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={styles.blockInfo}>
                        <View style={styles.blockInfoHeader}>
                            <Image
                                source={{
                                    uri: job?.image?.secureURL,
                                }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 20,
                                    borderWidth: 2,
                                    borderColor: colors.grayColor,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={styles.title}>{job.jobName}</Text>
                            <Text style={styles.company}>
                                {job.recruiterName}
                            </Text>
                        </View>
                        <View style={styles.blockInfoBody}>
                            <Text style={styles.textAddress}>
                                <Ionicons
                                    name="location-outline"
                                    size={16}
                                    color="black"
                                />
                                {job.workAddress}, {job.region}
                            </Text>
                            <Text style={styles.textSalary}>
                                <FontAwesome
                                    name="dollar"
                                    size={14}
                                    color={colors.blueColor}
                                />
                                {job.minSalary} {job.currency} - {job.maxSalary}{" "}
                                {job.currency} /{job.salaryFrequency}
                            </Text>
                            <View style={{flexDirection: "row"}}>
                                <View style={styles.roundInfo}>
                                    <Text>{job.jobType}</Text>
                                </View>
                                <View style={styles.roundInfo}>
                                    <Text>{job.workType}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            styles.buttonOutline,
                            styles.buttonApply,
                            {marginTop: 30},
                        ]}>
                        <Text style={styles.buttonOutlineText}>Apply</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}
