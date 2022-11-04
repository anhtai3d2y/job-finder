import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 40,
        // paddingBottom: 240,
        height: height,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.9,
    },
    content: {
        width: "90%",
        marginTop: 20,
        alignItems: "center",
    },
    blockInfo: {
        borderWidth: 2,
        borderColor: colors.grayColor,
        borderRadius: 30,
    },
    blockInfoHeader: {
        marginVertical: 10,
        paddingBottom: 10,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.grayColor,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    company: {
        color: colors.blueColor,
    },
    blockInfoBody: {
        marginBottom: 10,
        alignItems: "center",
    },
    textAddress: {},
    textSalary: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.blueColor,
        marginVertical: 10,
    },
    roundInfo: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        padding: 5,
    },

    buttonApply: {
        alignItems: "center",
    },

    button: {
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonOutline: {
        backgroundColor: colors.blueColor,
        marginTop: 5,
        borderColor: colors.blueColor,
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default styles;
