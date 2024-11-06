import TabBarIcon from "../../components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
	return (
		<>
			<Tabs>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								icon={focused ? "home-variant" : "home-variant-outline"}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="shop"
					options={{
						title: "Home",
						headerShown: false,
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
						headerShown: false,
						tabBarIcon: () => <TabBarIcon icon="account" />,
					}}
				/>
				<Tabs.Screen
					name="network"
					options={{
						title: "Network",
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<TabBarIcon icon="network" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: "Network",
						headerShown: false,
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
