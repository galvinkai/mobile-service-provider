import Logo from "@/assets/icons/account-active.svg";
import Layout from "@/components/Layout";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const iconSize = 80;

const Settings = () => {
    return (
        <Layout>
            <View className="items-center">
                <Logo width={iconSize} height={iconSize} />
                <Link
                    className="w-full py-4 text-center font-raleway-semibold text-xl text-blue"
                    href="/(auth)/welcome"
                >
                    Log Out
                </Link>
            </View>
        </Layout>
    );
};

export default Settings;
