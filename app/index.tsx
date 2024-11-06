import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const index = () => {
	return (
		<View className="flex-1 items-center justify-center">
			<Link href="/home" className="text-3xl font-rem">
				Home
			</Link>
		</View>
	);
};

export default index;
