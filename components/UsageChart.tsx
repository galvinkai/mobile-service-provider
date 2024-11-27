import { UsageChartProps } from "@/types/type";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const UsageChart = ({ data, title, link, colour }: UsageChartProps) => {
    const chartData = Array.isArray(data) ? data : [];
    const deviceWidth = Dimensions.get("window").width;
    return (
        <View className="gap-y-6">
            <View className="flex w-full flex-row items-center justify-between">
                <Text className="font-raleway-semibold text-xl">{title}</Text>
                <Link
                    className="font-raleway-semibold text-sm text-blue"
                    href={link}
                >
                    View details
                </Link>
            </View>

            <View>
                <LineChart
                    areaChart
                    hideDataPoints
                    isAnimated
                    rulesType="solid"
                    animationDuration={1200}
                    startFillColor={colour}
                    startOpacity={1}
                    endOpacity={1}
                    initialSpacing={5}
                    endSpacing={20}
                    data={chartData}
                    spacing={deviceWidth / 9}
                    thickness={2}
                    rulesThickness={1}
                    rulesColor={"#E0E0E0"}
                    yAxisColor="#fff"
                    xAxisColor="#E0E0E0"
                    color={colour}
                    xAxisLabelTexts={["M", "T", "W", "T", "F", "S", "S"]}
                    xAxisLabelTextStyle={{
                        fontFamily: "Raleway",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#9C9C9C",
                    }}
                    yAxisTextStyle={{
                        fontFamily: "Rem",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#9C9C9C",
                    }}
                    noOfVerticalLines={chartData.length}
                    hideOrigin
                />
            </View>
        </View>
    );
};

export default UsageChart;
