import { LayoutProps } from "@/types/type";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LayoutAuth = ({ children }: LayoutProps) => {
    return (
        <SafeAreaView className="bg-white px-8">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="h-full w-full items-center gap-y-8">
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LayoutAuth;
