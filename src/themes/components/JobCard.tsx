import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.grayColor,
        width: width * 0.9,
        borderRadius: 10,
        marginVertical: 10,
        // backgroundColor: colors.blueOpacityColor,
    },
    header: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
        width: "90%",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderColor: colors.grayColor,
        paddingBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.black,
    },
    company: {
        fontSize: 14,
    },
    content: {
        marginBottom: 10,
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
});

export default styles;
