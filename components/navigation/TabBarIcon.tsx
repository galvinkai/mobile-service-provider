import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image } from "react-native";
import test from "../../assets/icons/account.png";

interface TabBarIconProps {
	icon: any;
	color?: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ icon, color }) => {
	if (icon.includes("home") || icon.includes("shop") || icon.includes("cog")) {
		return <MaterialCommunityIcons name={icon} size={24} color={color} />;
	}
	if (icon === "account") {
		console.log("icon", icon);
		return <Image src={test} />;
	}
	if (icon == "network") {
		return <MaterialIcons name="cell-tower" size={24} color={color} />;
	}
};

export default TabBarIcon;
