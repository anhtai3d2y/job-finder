import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: width - 20,
        height: 30,
    },
    amountContainer: {
        position: "absolute",
        left: 0,
        alignItems: "flex-start",
    },
    starContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    bootsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: 22,
        width: 24,
        fontWeight: "500",
    },
    title: {
        marginLeft: 5,
        fontSize: 20,
        color: colors.blueColor,
        fontWeight: "500",
    },
});

export default styles;
