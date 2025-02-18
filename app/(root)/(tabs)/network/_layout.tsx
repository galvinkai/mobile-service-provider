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
      <Stack.Screen name="index" options={{ headerTitle: "Network" }} />
      <Stack.Screen
        name="areaCoverage"
        options={{ headerTitle: "Area Coverage" }}
      />
      <Stack.Screen
        name="broadbandSettings"
        options={{ headerTitle: "Broadband Settings" }}
      />
      <Stack.Screen name="speedTest" options={{ headerTitle: "Speed Test" }} />
    </Stack>
  );
};

export default ShopLayout;
