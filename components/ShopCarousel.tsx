import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const ShopCarousel = () => {
    const ref = React.useRef<ICarouselInstance>(null);
    const scrollOffsetValue = useSharedValue(0);

    const number = ["1", "2", "3"];
    const iconSize = 32;
    const deviceWidth = Dimensions.get("window").width;

    useEffect(() => {
        console.log("Device width:", deviceWidth);
        // Access the shared value here if needed
        const offsetValue = scrollOffsetValue.value;
        console.log("Initial scroll offset value:", offsetValue);
    }, [scrollOffsetValue]);

    const renderItem = ({ item }: { item: string }) => (
        <View className="h-full w-full items-center justify-between bg-light-blue py-6">
            <Text className="font-raleway-semibold text-5xl text-white">
                Promo Deal {item}
            </Text>

            <Link
                href="/(root)/(tabs)/shop"
                className="rounded-full bg-orange px-8 py-3 font-raleway-medium text-white"
            >
                View Deal
            </Link>
        </View>
    );

    return (
        <GestureHandlerRootView className="flex-1">
            <View id="carousel-component" style={{ width: "100%" }}>
                <Carousel
                    ref={ref}
                    loop={true}
                    width={deviceWidth}
                    height={315}
                    snapEnabled={true}
                    pagingEnabled={true}
                    autoPlayInterval={2000}
                    data={number}
                    defaultScrollOffsetValue={scrollOffsetValue}
                    onSnapToItem={(index: number) =>
                        console.log("current index:", index)
                    }
                    renderItem={renderItem}
                />
                <View className="absolute top-36 flex w-full flex-row justify-between px-6">
                    <Pressable
                        onPress={() => {
                            ref.current?.prev(); // 6. Call the "next" method on the ref
                        }}
                    >
                        <MaterialIcons
                            className="rounded-full bg-gray-200/50 p-1 shadow-sm shadow-black/20"
                            name="keyboard-arrow-left"
                            size={iconSize}
                            color="#E87400"
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            ref.current?.next(); // 6. Call the "next" method on the ref
                        }}
                    >
                        <MaterialIcons
                            className="rounded-full bg-gray-200/50 p-1 shadow-sm shadow-black/20"
                            name="keyboard-arrow-right"
                            size={iconSize}
                            color="#E87400"
                        />
                    </Pressable>
                </View>
            </View>
        </GestureHandlerRootView>
    );
};

export default ShopCarousel;
