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
        <SettingsOption link="/settings/appSettings">
          App Settings
        </SettingsOption>
        <SettingsOption link="/settings/notifications">
          Notifications
        </SettingsOption>

        <SettingsOption link="/settings/parentalControls">
          Parental Controls
        </SettingsOption>
        <SettingsOption link="/settings/permissions">
          Permissions
        </SettingsOption>
        <SettingsOption link="/settings/policy">Privacy Policy</SettingsOption>
        <SettingsOption link="/settings/termsConditions">
          Terms and Conditions
        </SettingsOption>
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
