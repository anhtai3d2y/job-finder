import React from "react";
import {Text, View} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/components/Logo";
import {Feather} from "@expo/vector-icons";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Feather name="linkedin" size={80} color={colors.blueColor} />
            <Text style={styles.title}>Jobee</Text>
        </View>
    );
}
