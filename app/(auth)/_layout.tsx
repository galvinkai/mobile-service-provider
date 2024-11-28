import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" />
            <Stack.Screen
                name="loginMobile"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Log in",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="loginOTP"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Log in",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="loginEmail"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Login",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Create Account",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="registerOptions"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Create Account",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />

            <Stack.Screen
                name="registerBroadbandNumber"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Create Account",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="registerMobileNumber"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontFamily: "Raleway",

                        fontSize: 14,
                    },
                    headerTitle: "Create Account",
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTitleStyle: {
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        fontSize: 16,
                    },
                    headerTintColor: "#fff",
                }}
            />
        </Stack>
    );
};

export default AuthLayout;
