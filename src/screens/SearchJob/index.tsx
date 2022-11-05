import React from "react";
import {Text, View} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import styles from "../../themes/screens/SearchJob";

export default function SearchJobScreen() {
    return (
        <View style={styles.container}>
            <TinyLogo />
            <Text>This is the search Job screen</Text>
        </View>
    );
}
