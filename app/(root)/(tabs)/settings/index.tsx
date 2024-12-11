import Logo from "@/assets/icons/account-active.svg";
import Layout from "@/components/Layout";
import SettingsOption from "@/components/Settings";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const iconSize = 80;

const Settings = () => {
    return (
        <Layout>
            <View className="items-center gap-y-10 px-4">
                <Logo width={iconSize} height={iconSize} />
                <SettingsOption link="">App Settings</SettingsOption>
                <SettingsOption link="">Notifications</SettingsOption>

                <SettingsOption link="">Parental Controls</SettingsOption>
                <SettingsOption link="">Permissions</SettingsOption>
                <SettingsOption link="">Privacy Policy</SettingsOption>
                <SettingsOption link="">Terms and Conditions</SettingsOption>
                <Link
                    className="text-blue-custom w-full py-4 text-center font-raleway-semibold text-xl"
                    href="/(auth)/welcome"
                >
                    Log Out
                </Link>
            </View>
        </Layout>
    );
};

export default Settings;
