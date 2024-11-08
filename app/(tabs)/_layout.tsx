import TabBarIcon from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarInactiveTintColor: "#295791",
                    tabBarActiveTintColor: "#E87400",
                    tabBarStyle: {
                        borderTopColor: "#295791",
                        borderTopWidth: 1.5,
                    },
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#295791",
                    },
                    headerTintColor: "#fff",
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerTitle: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
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
                            <TabBarIcon
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
                            <TabBarIcon
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
                            <TabBarIcon icon="network" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Network",

                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                icon={focused ? "cog" : "cog-outline"}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
