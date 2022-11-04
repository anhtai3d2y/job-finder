import {StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/Colors";
import {width} from "../../constants/Layout";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 40,
    },
    avatarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.9,
    },
    messageHeader: {
        alignItems: "center",
    },
    info: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textInfo: {
        fontSize: 20,
        fontWeight: "500",
    },
    bioText: {
        fontSize: 14,
        fontWeight: "300",
    },
    actions: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    action: {
        alignItems: "center",
        justifyContent: "center",
    },
    blockRound: {
        width: width * 0.9,
        // height: 100,
        borderWidth: 2,
        borderColor: colors.grayColor,
        borderRadius: 20,
        marginBottom: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.grayColor,
    },
    title: {
        flexDirection: "row",
    },
    text: {
        marginLeft: 10,
        marginBottom: 10,
        color: "#000",
        fontSize: 20,
        fontWeight: "500",
    },
    content: {
        marginLeft: 20,
        marginBottom: 10,
    },
    detail: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
});

export default styles;
