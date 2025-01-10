import { Image, Text, View } from "react-native";
import { Movie } from "./MovieData";
import ReadMore from "./ReadMore";
import { AirbnbRating } from "react-native-ratings";

export type Mode = "viewers"|"rating"
export const Mov:React.FC<{vertical?:boolean, movie:Movie, maxStarsSize?:number, mode?:Mode}> = ({movie, vertical=false, maxStarsSize=5, mode="rating"})=>{
return <View
    style={{
        margin: 8,
        display: "flex",
        flexDirection: vertical?"column":"row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "lavender",
        borderRadius: 10,
        padding: 10,
    }}
>
    <View>
        <Image
            source={{ uri: movie.imageLink }}
            style={vertical?{width:100, height:200}:{ width: 100, height: 300 }}
        />
    </View>
    <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
            {movie.title}
        </Text>
        <Text style={{ fontSize: 15 }}>{movie.year}</Text>
        {!vertical && 
        <ReadMore minNumberOfLines={2}>
            {movie.description}
        </ReadMore>
        }
        {mode==="viewers"?<Text>{`${String(movie.viewers).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Viewers`}</Text>:<AirbnbRating
            selectedColor="red"
            reviewColor="black"
            reviews={[
                "Terrible",
                "Disappointing",
                "Average",
                "Very Good",
                "Excellent",
            ]}
            count={maxStarsSize}
            defaultRating={movie.rating}
            size={20}
            reviewSize={20}
        />}
    </View>
</View>;
}
export default Mov