import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" />
            <Stack.Screen name="loginMobile" />
            <Stack.Screen name="loginOTP" />
            <Stack.Screen name="loginEmail" />
            <Stack.Screen name="register" />
        </Stack>
    );
};

export default AuthLayout;
