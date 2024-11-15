import { LayoutProps } from "@/types/type";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children, homeBanner, bgColor }: LayoutProps) => {
    return (
        <SafeAreaView
            className="h-full w-full flex-1"
            edges={["left", "right"]}
            style={{ backgroundColor: "white" }}
        >
            <ScrollView
                className="w-full"
                style={{
                    backgroundColor: bgColor ? "transparent" : "white",
                }}
                contentContainerStyle={{ height: "100%" }}
            >
                <View>{homeBanner && homeBanner}</View>
                <View className="gap-y-4 px-6">{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
