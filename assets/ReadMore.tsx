import { useState } from "react";
import { Text, TextProps, View } from "react-native";
export const Main: React.FC<
    { children: string, minNumberOfLines?:number, maxNumberOfLines?:number } & Omit<Omit<TextProps, "children">, "numberOfLines">
> = ({ children, minNumberOfLines=1, maxNumberOfLines=Number.MAX_SAFE_INTEGER, ...prop }) => {
    const [isTruncated, setIsTruncated] = useState(true);

    const ReadMore = () => {
        return (
            <Text
                onPress={() => setIsTruncated(!isTruncated)}
                style={{ color: "green" }}
            >
                {isTruncated ? "Read more" : " Read less"}
            </Text>
        );
    };
    return (
        <View style={{ padding: 20, flexDirection: "column" }}>
            <Text
                numberOfLines={isTruncated ? minNumberOfLines : maxNumberOfLines}

                {...prop}
            >
                {children}
                {!isTruncated && <ReadMore />}
            </Text>
            {isTruncated && <ReadMore />}
        </View>
    );
};

export default Main;
