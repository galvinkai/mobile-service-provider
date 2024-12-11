import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const ShopCarousel = () => {
    const ref = React.useRef<ICarouselInstance>(null);
    const scrollOffsetValue = useSharedValue(0);

    const number: string[] = ["1", "2", "3", "4", "5"];
    const imageMap: { [key: string]: any } = {
        "1": require("../assets/images/promos/promo-1.jpg"),
        "2": require("../assets/images/promos/promo-2.jpg"),
        "3": require("../assets/images/promos/promo-3.jpg"),
        "4": require("../assets/images/promos/promo-4.jpg"),
        "5": require("../assets/images/promos/promo-5.jpg"),
    };
    const iconSize = 32;
    const deviceWidth = Dimensions.get("window").width;
    const blurhash =
        "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

    useEffect(() => {
        console.log("Device width:", deviceWidth);
        // Access the shared value here if needed
        const offsetValue = scrollOffsetValue.value;
        console.log("Initial scroll offset value:", offsetValue);
    }, [scrollOffsetValue]);

    const renderItem = ({ item }: { item: string }) => (
        <View className="border-light-blue-custom h-full w-full flex-1 items-center justify-between gap-y-4 border-b-2 pb-6">
            <Image
                source={imageMap[item]}
                style={{ width: deviceWidth, flex: 1 }}
                alt="Promo"
                contentFit="fill"
                placeholder={blurhash}
                transition={800}
            />

            <Link
                href="/(root)/(tabs)/shop"
                className="bg-orange-custom rounded-full px-8 py-3 font-raleway-medium text-white"
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
                            className="rounded-full bg-gray-200/90 p-1 shadow-sm shadow-black/40"
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
                            className="rounded-full bg-gray-200/90 p-1 shadow-sm shadow-black/40"
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
