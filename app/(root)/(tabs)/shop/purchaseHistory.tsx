import IconButton from "@/components/IconButton";
import Octicons from "@expo/vector-icons/Octicons";
import { SearchBar } from "@rneui/themed";
import React, { useState } from "react";
import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const purchaseHistory = () => {
    const purchases = [
        {
            header: "12 November 2024",
            data: [
                {
                    id: 1,
                    item: "Data",
                    date: "12 November 2024",
                    cost: 20,
                    type: "data",
                },
                {
                    id: 2,
                    item: "Airtime",
                    date: "11 November 2024",
                    cost: 200,
                    type: "airtime",
                },
            ],
        },

        {
            header: "10 November 2024",
            data: [
                {
                    id: 3,
                    item: "Minutes",
                    date: "10 November 2024",
                    cost: 20,
                    type: "minutes",
                },
            ],
        },
        {
            header: "8 November 2024",
            data: [
                {
                    id: 4,
                    item: "30 Day Jiva Streaming",
                    date: "9 November 2024",
                    cost: 130,
                    type: "package",
                },
                {
                    id: 5,
                    item: "Data",
                    date: "8 November 2024",
                    cost: 350,
                    type: "data",
                },
                {
                    id: 6,
                    item: "Airtime",
                    date: "7 November 2024",
                    cost: 20,
                    type: "airtime",
                },
            ],
        },

        {
            header: "6 November 2024",
            data: [
                {
                    id: 7,
                    item: "Minutes",
                    date: "6 November 2024",
                    cost: 20,
                    type: "minutes",
                },
            ],
        },
        {
            header: "5 November 2024",
            data: [
                {
                    id: 8,
                    item: "Jiva Surf",
                    date: "5 November 2024",
                    cost: 40,
                    type: "package",
                },
            ],
        },
        {
            header: "4 November 2024",
            data: [
                {
                    id: 9,
                    item: "Data",
                    date: "4 November 2024",
                    cost: 20,
                    type: "data",
                },
            ],
        },
        {
            header: "3 November 2024",
            data: [
                {
                    id: 10,
                    item: "Airtime",
                    date: "3 November 2024",
                    cost: 20,
                    type: "airtime",
                },
            ],
        },
        {
            header: "2 November 2024",
            data: [
                {
                    id: 11,
                    item: "Minutes",
                    date: "2 November 2024",
                    cost: 20,
                    type: "minutes",
                },
            ],
        },
        {
            header: "1 November 2024",
            data: [
                {
                    id: 12,
                    item: "Jiva Supreme Boost",
                    date: "1 November 2024",
                    cost: 60,
                    type: "package",
                },
            ],
        },
    ];

    const iconSize = 60;

    const purchaseItem = (purchase: {
        id: number;
        item: string;
        date: string;
        cost: number;
        type: string;
    }) => {
        return (
            <View className="px-4">
                <View className="mb-4 w-full flex-1 flex-row items-center justify-between rounded-md border border-light-blue px-4 py-4">
                    <View className="flex flex-row items-center gap-x-2">
                        <IconButton
                            iconType="Font Awesome 5"
                            iconName="globe"
                            iconSize={18}
                            padding="p-1.5"
                            isDisabled={true}
                        />

                        <Text className="font-raleway-medium text-lg">
                            {purchase.item}
                        </Text>
                    </View>

                    <Text className="font-rem-light text-base">
                        N${purchase.cost.toFixed(2)}
                    </Text>
                </View>
            </View>
        );
    };

    const dateSectionHeader = (header: string) => {
        return (
            <Text className="mb-4 border-y border-blue bg-gray-50 px-6 py-4 font-raleway-medium text-lg">
                {header}
            </Text>
        );
    };

    const [search, setSearch] = useState("");

    const updateSearch = (search: string) => {
        setSearch(search);
    };

    return (
        <SafeAreaView className="h-full bg-white" edges={["left", "right"]}>
            <SearchBar
                placeholder="Search for a purchase"
                onChangeText={updateSearch}
                value={search}
                lightTheme
                containerStyle={{
                    backgroundColor: "white",

                    borderBottomColor: "#AEC0D5",
                }}
                inputStyle={{
                    backgroundColor: "white",
                    fontFamily: "raleway",
                    fontSize: 16,
                }}
                inputContainerStyle={{
                    backgroundColor: "white",
                }}
                searchIcon={
                    <Octicons name="search" size={24} color="#AEC0D5" />
                }
            />
            <SectionList
                sections={purchases}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item: purchase }) => purchaseItem(purchase)}
                renderSectionHeader={({ section: { header } }) =>
                    dateSectionHeader(header)
                }
            />
        </SafeAreaView>
    );
};

export default purchaseHistory;
