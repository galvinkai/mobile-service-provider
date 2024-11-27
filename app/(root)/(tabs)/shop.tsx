import BalanceShop from "@/components/BalanceShop";
import IconButton from "@/components/IconButton";
import Layout from "@/components/Layout";
import ShopCarousel from "@/components/ShopCarousel";
import React from "react";
import { View } from "react-native";

const Shop = () => {
    return (
        <Layout carousel={<ShopCarousel />}>
            <BalanceShop />

            <View className="flex w-full flex-row justify-between gap-y-10">
                <IconButton
                    iconType="Font Awesome 5"
                    iconName="globe"
                    text="Buy Data"
                    link=""
                    width="w-1/4"
                />
                <IconButton
                    iconType="Font Awesome 6"
                    iconName="money-bills"
                    iconSize={29}
                    padding="px-3 py-4"
                    text="Buy Airtime"
                    link=""
                    width="w-1/4"
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="local-phone"
                    text="Buy Minutes"
                    link=""
                    width="w-1/4"
                />
                <IconButton
                    iconType="Material Community Icon"
                    iconName="package-variant-closed"
                    text="Buy Jiva"
                    link=""
                    width="w-1/4"
                />
            </View>
            <View className="flex w-full flex-row justify-between gap-y-10">
                <IconButton
                    iconType="Material Icon"
                    iconName="send-to-mobile"
                    text="Send Airtime"
                    link=""
                    width="w-1/4"
                />
                <IconButton
                    iconType="Custom Icon Data"
                    iconName=""
                    text="Send Data"
                    link=""
                    width="w-1/4"
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="history"
                    text="Purchase History"
                    link=""
                    width="w-1/4"
                />

                <IconButton
                    iconType="Material Icon"
                    iconName="attach-money"
                    text="Deals"
                    link=""
                    width="w-1/4"
                />
            </View>
        </Layout>
    );
};

export default Shop;
