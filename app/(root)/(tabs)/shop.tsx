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

            <View className="flex w-full flex-row flex-wrap justify-between gap-y-10">
                <IconButton
                    iconType="Font Awesome 5"
                    iconName="globe"
                    text="Buy Data"
                    link=""
                />
                <IconButton
                    iconType="Font Awesome 6"
                    iconName="money-bills"
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
                    iconType="Custom Icon Data"
                    iconName=""
                    text="Send Data"
                    link=""
                />
                <IconButton
                    iconType="Material Icon"
                    iconName="history"
                    text="Purchase History"
                    link=""
                />

                <IconButton
                    iconType="Material Icon"
                    iconName="attach-money"
                    text="Deals"
                    link=""
                />
            </View>
        </Layout>
    );
};

export default Shop;
