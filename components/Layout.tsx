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
            className="w-full"
            style={{
                backgroundColor: bgColor
                    ? bgColor
                    : homeBanner
                      ? "#295791"
                      : "white",
            }}
        >
            <View>{homeBanner}</View>
            <ScrollView
                className="w-full px-4"
                style={{
                    backgroundColor: bgColor ? "transparent" : "white",
                    height: "100%",
                }}
                contentContainerStyle={{ height: "100%" }}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Layout;
