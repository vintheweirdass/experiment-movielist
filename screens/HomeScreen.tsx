import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { HomeScreenProps } from "./typeHelper";
import { Movie, movieData } from "../assets/MovieData";
import MovieTab from "../assets/MovieTab";
import { ScrollView } from "react-native";
const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    let findHighestRating: Movie = movieData[0];
    for (var i = 0; i < movieData.length; i++) {
        if (movieData[i].rating > findHighestRating.rating) {
            findHighestRating = movieData[i];
        }
    }
    const mostWatched = [...movieData].sort((
        { viewers },
        { viewers: viewers2 },
    ) => viewers - viewers2).reverse();
    const highestToLow = [...movieData].sort((
        { rating },
        { rating: rating2 },
    ) => rating - rating2).reverse();
    return (
        <FlatList
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            data={highestToLow}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ padding: 8 }}
            ListHeaderComponent={
                <>
                    <Text style={{ textAlign: "center", fontSize: 30 }}>
                        Most Watched
                    </Text>
                    <ScrollView
                        horizontal={true}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        {mostWatched.map((item) => (
                            <MovieTab
                                key={item.id}
                                movie={item}
                                maxStarsSize={findHighestRating.rating}
                                vertical={true}
                                mode="viewers"
                            />
                        ))}
                    </ScrollView>
                    <Text style={{ textAlign: "center", fontSize: 30 }}>
                        From highest to lowest
                    </Text>
                </>
            }
            renderItem={({ item }) => {
                return (
                    <MovieTab
                        movie={item}
                        maxStarsSize={findHighestRating.rating}
                        vertical={false}
                    />
                );
            }}
        />
    );
};
export default HomeScreen;
