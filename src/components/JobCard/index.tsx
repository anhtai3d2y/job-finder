import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/components/JobCard";

export default function JobCard({route, navigation, job}) {
    const handleDetailJob = () => {
        navigation.navigate("JobDetail", {
            id: job._id,
        });
    };
    const handleSaveJob = () => {
        console.log("save job: ", job._id);
    };
    return (
        <TouchableOpacity onPress={handleDetailJob}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source={{
                                uri: job?.image?.secureURL,
                            }}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: colors.grayColor,
                                marginRight: 10,
                            }}
                        />
                        <View>
                            <Text style={styles.title}>{job.jobName}</Text>
                            <Text style={styles.company}>
                                {job.recruiterName}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleSaveJob}>
                        <Feather
                            name="bookmark"
                            size={24}
                            color={colors.blueColor}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
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
        </TouchableOpacity>
    );
}
