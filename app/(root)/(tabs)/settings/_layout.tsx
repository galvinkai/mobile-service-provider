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
      <Stack.Screen name="appSettings" options={{ headerTitle: "Settings" }} />
      <Stack.Screen
        name="notifications"
        options={{ headerTitle: "Notifications" }}
      />
      <Stack.Screen
        name="parentalControls"
        options={{ headerTitle: "Parental Controls" }}
      />
      <Stack.Screen
        name="permissions"
        options={{ headerTitle: "Permissions" }}
      />
      <Stack.Screen name="policy" options={{ headerTitle: "Privacy Policy" }} />
      <Stack.Screen
        name="termsConditions"
        options={{ headerTitle: "Terms & Conditions" }}
      />
    </Stack>
  );
};

export default SettingsLayout;
