import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {Text, View} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/components/Logo";

export default function Logo() {
    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.logo}
                source={require("../../assets/logo/kmatch.png")}
            /> */}
            <AntDesign name="fork" size={80} color={colors.blueColor} />
            <Text style={styles.title}>Job Finder</Text>
        </View>
    );
}
