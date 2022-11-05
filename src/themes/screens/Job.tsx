import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 40,
        paddingBottom: 240,
        height: height,
    },
    avatarContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: width * 0.9,
    },
    messageHeader: {
        alignItems: "center",
        marginRight: 20,
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
        fontSize: 16,
        fontWeight: "300",
    },
    searchContainer: {
        marginTop: 20,
        backgroundColor: colors.blueOpacityColor,
        height: 50,
        width: width * 0.9,
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    searchText: {
        color: colors.black,
    },
    jobContainer: {
        marginTop: 20,
        width: width * 0.9,
    },
    jobHeader: {
        alignItems: "flex-start",
    },
    jobHeaderText: {
        fontSize: 20,
        fontWeight: "500",
    },
    jobContent: {
        marginTop: 10,
        alignItems: "center",
    },
});

export default styles;
