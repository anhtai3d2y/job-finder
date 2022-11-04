import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/screens/SettingProfile";
import useStore from "../../stores/store";
import {setToken} from "../../helpers";
import {useState} from "react";
import ChangePasswordModal from "../../modals/ChangePasswordModal";

export default function SettingProfileScreen({navigation}) {
    const [changePasswordModalVisible, setChangePasswordModalVisible] =
        useState(false);
    const setTokenStore = useStore(state => state.setToken);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{backgroundColor: colors.grayColor}}>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                    behavior="position"
                    enabled
                    // keyboardVerticalOffset={100}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>Setting</Text>
                    </View>
                    <Text style={{marginTop: 20, marginLeft: 15}}>
                        ACCOUNT EMAIL
                    </Text>
                    <View style={styles.infoView}>
                        <Text>Email</Text>
                        <Text style={{color: colors.blueColor}}>
                            anhtai3d2y@gmail.com
                        </Text>
                    </View>

                    {/* <Text style={{marginTop: 20, marginLeft: 15}}>
                        DISCOVERY
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setSettingNewsfeedModalVisible(true);
                        }}>
                        <View style={styles.infoView}>
                            <Text>Setting news feed</Text>
                            <Text>{">"}</Text>
                        </View>
                    </TouchableOpacity> */}
                    <Text style={{marginTop: 20, marginLeft: 15}}>
                        PASSWORD
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setChangePasswordModalVisible(true);
                        }}>
                        <View style={styles.infoView}>
                            <Text>Change password</Text>
                            <Text>{">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogout}>
                            <Text style={styles.buttonText}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <ChangePasswordModal
                    visible={changePasswordModalVisible}
                    setVisible={setChangePasswordModalVisible}
                />
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
