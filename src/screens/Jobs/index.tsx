import {Text, View} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import styles from "../../themes/screens/Job";
export default function JobScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <TinyLogo />
            <Text>This is job screen</Text>
        </View>
    );
}
