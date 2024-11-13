import React, { useRef, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";

const Shop = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View>
            <Swiper
                ref={swiperRef}
                loop={true}
                dot={<View className="h-2 w-3 rounded-full bg-gray-400" />}
                activeDot={<View className="bg-orange h-2 w-3 rounded-full" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {/* {shopDeals.map((deal) => (
                    <View>
                        <Text>{deal.title}</Text>
                    </View>
                ))} */}
            </Swiper>
        </View>
    );
};

export default Shop;
