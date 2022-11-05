import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import shallow from "zustand/shallow";
import TinyLogo from "../../components/TinyLogo";
import useStore from "../../stores/store";
import styles from "../../themes/screens/SearchJob";

export default function SearchJobScreen() {
    const getCareers = useStore(state => state.getCareers);
    const careers = useStore(state => state.getCareers, shallow);
    const [arrCareers, setArrCareers] = useState([]);

    useEffect(() => {
        getCareers();
    }, []);

    useEffect(() => {
        setArrCareers(careers);
        console.log("careers", careers);
    }, [careers]);
    return (
        <View style={styles.container}>
            <TinyLogo />
            <Text>This is the search Job screen</Text>
        </View>
    );
}
