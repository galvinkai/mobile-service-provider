import BalanceShop from "@/components/BalanceShop";
import IconButton from "@/components/IconButton";
import Layout from "@/components/Layout";
import React from "react";
import { View } from "react-native";

const Shop = () => {
    return (
        <Layout>
            <BalanceShop />

            <View className="items- flex w-full flex-row flex-wrap justify-between gap-y-10">
                <IconButton
                    iconType="FontAwesome5"
                    iconName="globe"
                    text="Buy Data"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Buy Airtime"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="local-phone"
                    text="Buy Minutes"
                    link=""
                />
                <IconButton
                    iconType="Material Community Icon"
                    iconName="package-variant-closed"
                    text="Buy Jiva"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Send Airtime"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Send Data"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Purchase History"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Deals"
                    link=""
                />
            </View>
        </Layout>
    );
};

export default Shop;
