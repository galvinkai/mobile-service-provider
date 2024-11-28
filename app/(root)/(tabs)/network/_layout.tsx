import { Stack } from "expo-router";
import React from "react";

const ShopLayout = () => {
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
            <Stack.Screen name="index" options={{ headerTitle: "Shop" }} />
        </Stack>
    );
};

export default ShopLayout;
