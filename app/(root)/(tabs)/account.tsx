import Logo from "@/assets/icons/account-active.svg";
import Accounts from "@/components/Accounts";
import Layout from "@/components/Layout";
import React from "react";
import { Text, View } from "react-native";

const Account = () => {
    return (
        <Layout>
            <Text className="font-raleway-semibold text-4xl">Manage</Text>

            <View className="w-full flex-1 flex-row justify-between gap-x-4">
                <Accounts text="Profile" icon="account" />
                <Accounts text="Broadband" icon="wifi" />
                <Accounts text="Plan" icon="cellphone" />
                <Accounts text="Billing" icon="receipt" />
            </View>

            <View className="flex flex-row items-center justify-between rounded-md border-2 border-light-blue px-4 py-6">
                <View className="gap-y-0.5">
                    <Text className="mb-2 font-raleway-semibold text-xl">
                        Mobile Plan
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Account <Text className="font-rem-light">2179806</Text>
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Apple iPhone <Text className="font-rem-light">12</Text>{" "}
                        Pro
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Pay As You Go
                    </Text>
                    <Text className="font-rem-light text-sm">0856581057</Text>
                </View>

                <Logo width={80} height={80} />
            </View>

            <View className="flex flex-row items-center justify-between rounded-md border-2 border-light-blue px-4 py-6">
                <View className="gap-y-0.5">
                    <Text className="mb-2 font-raleway-semibold text-xl">
                        Mobile Plan
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Account <Text className="font-rem-light">2179806</Text>
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Apple iPhone <Text className="font-rem-light">12</Text>{" "}
                        Pro
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Pay As You Go
                    </Text>
                    <Text className="font-rem-light text-sm">0856581057</Text>
                </View>

                <Logo width={80} height={80} />
            </View>

            <View className="flex flex-row items-center justify-between rounded-md border-2 border-light-blue px-4 py-6">
                <View className="gap-y-0.5">
                    <Text className="mb-2 font-raleway-semibold text-xl">
                        Mobile Plan
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Account <Text className="font-rem-light">2179806</Text>
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Apple iPhone <Text className="font-rem-light">12</Text>{" "}
                        Pro
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Pay As You Go
                    </Text>
                    <Text className="font-rem-light text-sm">0856581057</Text>
                </View>

                <Logo width={80} height={80} />
            </View>

            <View className="flex flex-row items-center justify-between rounded-md border-2 border-light-blue px-4 py-6">
                <View className="gap-y-0.5">
                    <Text className="mb-2 font-raleway-semibold text-xl">
                        Mobile Plan
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Account <Text className="font-rem-light">2179806</Text>
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Apple iPhone <Text className="font-rem-light">12</Text>{" "}
                        Pro
                    </Text>
                    <Text className="font-raleway-medium text-sm">
                        Pay As You Go
                    </Text>
                    <Text className="font-rem-light text-sm">0856581057</Text>
                </View>

                <Logo width={80} height={80} />
            </View>
        </Layout>
    );
};

export default Account;
