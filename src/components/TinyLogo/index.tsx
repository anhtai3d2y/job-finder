import {Feather} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import styles from "../../themes/components/TinyLogo";
import {convertHMS} from "../../utils/util";

export default function TinyLogo() {
    const userProfile = useStore(state => state.userProfile, shallow);
    const [bootsTime, setBootsTime] = useState(
        Math.round(userProfile.boots / 1000),
    );
    const [starAmount, setStarAmount] = useState(userProfile.starAmount);
    const [bootsAmount, setBootsAmount] = useState(userProfile.bootsAmount);
    const bootsTimeText = convertHMS(bootsTime);
    useEffect(() => {
        const interval = setInterval(() => {
            if (bootsTime > 0) {
                setBootsTime(bootsTime => bootsTime - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }),
        [];
    useEffect(() => {
        setBootsTime(Math.round(userProfile.boots / 1000));
        setStarAmount(userProfile.starAmount);
        setBootsAmount(userProfile.bootsAmount);
    }, [userProfile]);
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Feather name="linkedin" size={20} color={colors.blueColor} />
                <Text style={styles.title}>Jobee</Text>
            </View>
        </View>
    );
}
