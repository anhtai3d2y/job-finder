import {Feather, FontAwesome5, Ionicons, Octicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Profile";
import shallow from "zustand/shallow";

export default function ProfileScreen({navigation}) {
    const getUserProfile = useStore(state => state.getUserProfile);
    const userProfile = useStore(state => state.userProfile, shallow);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    const handleSetting = async () => {
        navigation.navigate("SettingProfile");
    };

    const handelEditProfile = async () => {
        navigation.navigate("EditProfile");
    };

    return (
        <View style={styles.container}>
            <TinyLogo />
            <ScrollView>
                <View
                    style={{
                        alignItems: "center",
                        paddingBottom: 20,
                        backgroundColor: "white",
                    }}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.messageHeader}>
                            <View
                                style={{
                                    borderWidth: 3,
                                    borderColor: colors.blueColor,
                                    borderRadius: 500,
                                }}>
                                <Image
                                    source={{
                                        uri: user?.avatar?.secureURL,
                                    }}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 500,
                                        borderWidth: 4,
                                        borderColor: "#fff",
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{justifyContent: "space-evenly"}}>
                            <View style={styles.info}>
                                <Text style={styles.textInfo}>{user.name}</Text>
                                <Text style={styles.textInfo}>
                                    ,{" " + user.age}
                                </Text>
                            </View>
                            <Text style={styles.bioText}>
                                Backend Developer
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handelEditProfile}>
                            <View>
                                <Octicons
                                    name="pencil"
                                    size={20}
                                    color={colors.blueColor}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.blockRound}>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <FontAwesome5
                                name="user-alt"
                                size={20}
                                color={colors.blueColor}
                            />
                            <Text style={styles.text}>Contact Information</Text>
                        </View>
                        <TouchableOpacity onPress={handelEditProfile}>
                            <View>
                                <Octicons
                                    name="pencil"
                                    size={20}
                                    color={colors.blueColor}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.detail}>
                            <Octicons name="location" size={24} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 16}}>
                                New York, United State
                            </Text>
                        </View>
                        <View style={styles.detail}>
                            <Feather name="phone" size={24} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 16}}>
                                0932062686
                            </Text>
                        </View>
                        <View style={styles.detail}>
                            <Feather name="mail" size={24} color="black" />
                            <Text style={{marginLeft: 10, fontSize: 16}}>
                                anhtai3d2y@gmail.com
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blockRound}>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <Ionicons
                                name="document-text"
                                size={20}
                                color={colors.blueColor}
                            />
                            <Text style={styles.text}>Summary</Text>
                        </View>
                        <TouchableOpacity onPress={handelEditProfile}>
                            <View>
                                <Octicons
                                    name="pencil"
                                    size={20}
                                    color={colors.blueColor}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.detail}>
                            <Text style={{marginLeft: 10, fontSize: 16}}>
                                Hi, I'm Pham Duy Tai. I am a backend developer
                                with more than 5 years experience. I have worked
                                with many projects and I am very happy to work
                                with you.
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={handleSetting}>
                    <View style={styles.action}>
                        <Feather
                            name="settings"
                            size={20}
                            color={colors.blueColor}
                        />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
