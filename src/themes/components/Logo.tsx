import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logo: {
        height: 100,
        width: 109,
    },
    title: {
        fontSize: 50,
        color: colors.blueColor,
        fontWeight: "700",
    },
});

export default styles;
