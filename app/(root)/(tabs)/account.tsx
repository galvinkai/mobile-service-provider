import AccountExtra from "@/components/AccountExtra";
import Accounts from "@/components/Accounts";
import AccountSummary from "@/components/AccountSummary";
import Layout from "@/components/Layout";
import Usage from "@/components/Usage";
import React from "react";
import { Text, View } from "react-native";

const Account = () => {
    return (
        <Layout>
            <Text className="font-raleway-semibold text-4xl">Manage</Text>

            <View className="flex flex-row justify-between gap-x-2">
                <Accounts text="Profile" icon="account" iconSize={34} />
                <Accounts text="Mobile" icon="cellphone" />
                <Accounts text="Broadband" icon="wifi" />
                <Accounts text="Billing" icon="receipt" />
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
