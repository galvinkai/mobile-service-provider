import { LayoutProps } from "@/types/type";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children, homeBanner, bgColor, carousel }: LayoutProps) => {
    return (
        <SafeAreaView
            className="h-full w-full flex-1"
            edges={["left", "right"]}
            style={{ backgroundColor: "white" }}
        >
            <ScrollView
                className="w-full flex-1"
                style={{
                    backgroundColor: bgColor ? "transparent" : "white",
                }}
            >
                <View>{homeBanner && homeBanner}</View>
                <View>{carousel && carousel}</View>
                <View className="gap-y-8 p-6">{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
