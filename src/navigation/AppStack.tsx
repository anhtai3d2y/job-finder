import {
    Feather,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import shallow from "zustand/shallow";
import ChatScreen from "../screens/Chat";
import EditProfileScreen from "../screens/EditProfile";
import HomeScreen from "../screens/Home";
import HomeModal from "../screens/HomeModal";
import MatchesScreen from "../screens/Matches";
import MessagesScreen from "../screens/Message";
import ProfileScreen from "../screens/Profile";
import RankingScreen from "../screens/Ranking";
import SettingProfileScreen from "../screens/SettingProfile";
import useStore from "../stores/store";
import * as WebBrowser from "expo-web-browser";
import colors from "../constants/Colors";
import JobScreen from "../screens/Jobs";
import ApplicationScreen from "../screens/Application";
import SaveJobScreen from "../screens/SaveJob";
import JobDetailScreen from "../screens/JobDetail";
import SearchJobScreen from "../screens/SearchJob";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="HomeModal"
            component={HomeModal}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const RankingStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Ranking">
        <Stack.Screen
            name="Ranking"
            component={RankingScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const MatchesStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Matches">
        <Stack.Screen
            name="Matches"
            component={MatchesScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={({route}) => ({
                headerShown: false,
            })}
        />
        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => {
                return {
                    headerShown: false,
                    tabBarVisible: false,
                    headerBackTitleVisible: false,
                };
            }}
        />
    </Stack.Navigator>
);
const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="SettingProfile"
            component={SettingProfileScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const JobStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Jobs"
            component={JobScreen}
            options={({route}) => ({
                headerShown: false,
            })}
        />
        <Stack.Screen
            name="JobDetail"
            component={JobDetailScreen}
            options={{
                headerShown: false,
                tabBarVisible: false,
                headerBackTitleVisible: false,
            }}
        />
        <Stack.Screen
            name="SearchJob"
            component={SearchJobScreen}
            options={{
                headerShown: false,
                tabBarVisible: false,
                headerBackTitleVisible: false,
            }}
        />
    </Stack.Navigator>
);

const ApplicationStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Applications"
            component={ApplicationScreen}
            options={({route}) => ({
                headerShown: false,
            })}
        />
    </Stack.Navigator>
);
const SaveJobStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="SaveJob"
            component={SaveJobScreen}
            options={({route}) => ({
                headerShown: false,
            })}
        />
    </Stack.Navigator>
);
export default function AppStack() {
    const latitude = useStore(state => state.latitude);
    const longitude = useStore(state => state.longitude);
    const userAuth = useStore(state => state.userAuth);
    const updateUserLocation = useStore(state => state.updateUserLocation);
    const getUserProfile = useStore(state => state.getUserProfile);
    const clearPaypal = useStore(state => state.clearPaypal);
    const paypal = useStore(state => state.paypal, shallow);
    useEffect(() => {
        getUserProfile();
        const eventUpdateLocation = setInterval(() => {
            const body = {
                ...userAuth,
                latitude: latitude,
                longitude: longitude,
            };
            updateUserLocation(body);
        }, 60000);
        // const eventGetProfileUser = setInterval(() => {
        //     getUserProfile;
        // }, 10000);
        return () => {
            clearInterval(eventUpdateLocation);
            // clearInterval(eventGetProfileUser);
        };
    }, []);

    useEffect(() => {
        const callWebBrowser = async () => {
            try {
                const webBrowserStatus = await WebBrowser.openBrowserAsync(
                    paypal,
                );
                await getUserProfile();
                await clearPaypal();
            } catch (error) {
                console.log(error);
            }
        };
        if (paypal) {
            callWebBrowser();
        }
    }, [paypal]);

    const getTabBarVisibility = route => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : "";

        if (routeName === "Chat") {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.blueColor,
            }}>
            <Tab.Screen
                name="JobTab"
                component={JobStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Feather name="linkedin" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="ApplicationTab"
                component={ApplicationStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name="touch-app"
                            size={size}
                            color={color}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="SaveJobTab"
                component={SaveJobStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="md-bookmark"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
