import TabIcon from "@/components/TabIcon";
import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: "#295791",
                tabBarActiveTintColor: "#E87400",
                tabBarStyle: {
                    borderTopColor: "#295791",
                    borderTopWidth: 1.5,
                    height: 95,
                    paddingTop: 5,
                },
                tabBarIconStyle: {
                    marginBottom: 4,
                },
                tabBarLabelStyle: {
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    fontSize: 12,
                },
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#295791",
                    height: 85,
                },
                headerTitleStyle: {
                    fontFamily: "Raleway",
                    fontWeight: 500,
                    fontSize: 16,
                },
                headerTintColor: "#fff",
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerTitle: "",
                    title: "Home",
                    headerStyle: {
                        backgroundColor: "#295791",
                        borderBottomWidth: 0, // Remove bottom border
                        borderBottomColor: "transparent", // Ensure no color is applied
                        elevation: 0, // Remove shadow on Android
                        shadowOpacity: 0, // Remove shadow on iOS
                        height: 40,
                    },
                    headerTintColor: "#295791",

                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={
                                focused
                                    ? "home-variant"
                                    : "home-variant-outline"
                            }
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="shop"
                options={{
                    title: "Shop",

                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={focused ? "shopping" : "shopping-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",

                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            icon={focused ? "account-active" : "account"}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="network"
                options={{
                    title: "Network",
                    tabBarIcon: ({ color }) => (
                        <TabIcon icon="network" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={focused ? "cog" : "cog-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;
