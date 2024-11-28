import { Stack } from "expo-router";
import React from "react";

const SettingsLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
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
        >
            <Stack.Screen name="index" options={{ headerTitle: "Settings" }} />
        </Stack>
    );
};

export default SettingsLayout;
