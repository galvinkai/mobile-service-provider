import AccountActive from "@/assets/icons/account-active.svg";
import Account from "@/assets/icons/account.svg";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

interface TabBarIconProps {
	icon: any;
	color?: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ icon, color }) => {
	if (icon.includes("home") || icon.includes("shop") || icon.includes("cog")) {
		return <MaterialCommunityIcons name={icon} size={24} color={color} />;
	}
	if (icon === "account") {
		return <Account width={24} height={24} />;
	} else if (icon === "account-active") {
		return <AccountActive width={24} height={24} color="black" />;
	}
	if (icon == "network") {
		return <MaterialIcons name="cell-tower" size={24} color={color} />;
	}
};

export default TabBarIcon;
