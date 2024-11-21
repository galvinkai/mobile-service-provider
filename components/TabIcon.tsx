import AccountActive from "@/assets/icons/account-active.svg";
import Account from "@/assets/icons/account.svg";
import { TabIconProps } from "@/types/type";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

const TabIcon = ({ icon, color }: TabIconProps) => {
    const tabSize = 26;
    if (
        icon.includes("home") ||
        icon.includes("shop") ||
        icon.includes("cog")
    ) {
        return (
            <MaterialCommunityIcons name={icon} size={tabSize} color={color} />
        );
    }
    if (icon === "account") {
        return <Account width={tabSize} height={tabSize} />;
    } else if (icon === "account-active") {
        return <AccountActive width={tabSize} height={tabSize} color="black" />;
    }
    if (icon == "network") {
        return <MaterialIcons name="cell-tower" size={tabSize} color={color} />;
    }
};

export default TabIcon;
