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
        headerBackTitle: "Back",
        headerBackTitleStyle: {
          fontFamily: "Raleway",

          fontSize: 14,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Shop" }} />
      <Stack.Screen
        name="purchaseHistory"
        options={{ headerTitle: "Purchase History" }}
      />
      <Stack.Screen name="buy" options={{ headerTitle: "Buy" }} />
      <Stack.Screen name="send" options={{ headerTitle: "Send" }} />
    </Stack>
  );
};

export default ShopLayout;
