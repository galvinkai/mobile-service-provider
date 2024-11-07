import Layout from "@/components/Layout";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
	return (
		<Layout
			homeBanner={
				<View className="w-full bg-blue px-4 py-10">
					<Text className="text-white">Home</Text>
				</View>
			}>
			<StatusBar backgroundColor="#295791" style="light" />
			<View className="flex-1 justify-center items-center ">
				<Text className="text-2xl font-bold">Home</Text>
			</View>
		</Layout>
	);
};

export default Home;
