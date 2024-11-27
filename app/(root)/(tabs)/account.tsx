import AccountExtra from "@/components/AccountExtra";
import AccountSummary from "@/components/AccountSummary";
import IconButton from "@/components/IconButton";
import Layout from "@/components/Layout";
import Usage from "@/components/Usage";
import React from "react";
import { Text, View } from "react-native";

const Account = () => {
    return (
        <Layout>
            <Text className="font-raleway-semibold text-4xl">Manage</Text>

            <View className="flex flex-row justify-between">
                <IconButton
                    iconType="Material Community Icon"
                    iconName="account"
                    iconSize={29}
                    text="Profile"
                    link=""
                />
                <IconButton
                    iconType="Material Community Icon"
                    iconName="cellphone"
                    iconSize={29}
                    text="Mobile"
                    link=""
                />
                <IconButton
                    iconType="Material Community Icon"
                    iconName="wifi"
                    iconSize={29}
                    text="Broadband"
                    link=""
                />
                <IconButton
                    iconType="Material Community Icon"
                    iconName="receipt"
                    iconSize={29}
                    text="Billing"
                    link=""
                />
            </View>

            <AccountSummary
                device="phone"
                accountNumber="2179806"
                phoneModel="iPhone 12 Pro"
                plan="Pay As You Go"
                mobileNumber="0856581057"
            />
            <Usage />
            <AccountExtra
                type="Roaming"
                link="/(root)/(tabs)/account"
                linkText="Check your roaming costs"
                icon="airplane-ticket"
            >
                Check and manage your costs before you go away
            </AccountExtra>

            <AccountExtra
                type="Add Ons"
                link="/(root)/(tabs)/account"
                linkText="Take a look"
                icon="add-to-photos"
            >
                Awesome extras to keep your device in tip top condition for
                longer
            </AccountExtra>
        </Layout>
    );
};

export default Account;
