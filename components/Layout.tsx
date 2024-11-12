import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LayoutProps {
    children: React.ReactNode;
    bgColor?: string;
    homeBanner?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, bgColor, homeBanner }) => {
    return (
        <SafeAreaView
            className="h-full w-full"
            edges={["left", "right"]}
            style={{ backgroundColor: "white" }}
        >
            <ScrollView
                className="w-full"
                style={{
                    backgroundColor: bgColor ? "transparent" : "white",
                    height: "100%",
                }}
                contentContainerStyle={{ height: "100%" }}
            >
                <View className="flex-1">{homeBanner && homeBanner}</View>
                <View className="px-4">{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
