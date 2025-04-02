import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router/build/hooks";
import useFetch from "@/hooks/useFetch";
import {fetchMovieDetails} from "@/services/api";
import {icons} from "@/constants/icons";
import {useRouter} from "expo-router";

interface MovieInfoProps{
    label: string;
    value: string;
}

const MovieInfo = ({label, value}:MovieInfoProps )=>{
    return (
        <View className={"flex-col justify-center gap-1 items-star"}>
            <Text className={"text-light-200 text-xl"}>{label}</Text>
            <Text className={"text-white text-lg text-justify"}>{value}</Text>
        </View>
    );
}

const MovieInfoMapList = ({label, list}: { label: string, list:string[]})=>{
    return (
        <View className={"w-full mb-4 flex-col gap-2"}>
            <Text className={"text-light-200 text-xl"}>{label}</Text>
            <View className={"flex-row items-center justify-start gap-2"}>
                {list.map((e, index)=>{
                    return (
                        <View key={index} className={"bg-[rgba(255,255,255,0.2)] p-1.5 rounded-md"}>
                            <Text className={"text-white text-lg px-"}>{e}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

function formatDate(dateString: string) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [year, month, day] = dateString.split("-");
    return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
}

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const {
        data: movie,
        loading,
        error
    } = useFetch(()=>fetchMovieDetails(id as string));
    return (
        <View className={"bg-primary flex-1"}>
            {movie  &&
                (
                    <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <Image
                    source={{
                        uri: movie?.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                            :`https://placehold.co/600x400/1a1a1a/ffffff.png`
                    }}
                    resizeMode={"stretch"}
                    className={"w-full h-[600px]"}
                />
                <View className={"flex flex-col justify-center items-start mt-5 px-5"}>
                    <Text className={"text-white font-bold text-3xl"}>{movie?.title}</Text>
                    <View className={"flex mt-2 flex-row justify-start items-center gap-2"}>
                        <Text className={"text-light-200 text-md"}>{movie?.release_date?.split("-")[0]}</Text>
                        <Text className={"text-light-200 text-md"}>{movie?.runtime}m</Text>
                    </View>
                    <View className={"bg-[rgba(255,255,255,0.2)] flex flex-row px-2 py-1 gap-2 rounded-lg my-4"}>
                        <Image source={icons.star} className={"size-5"}/>
                        <Text className={"text-white font-bold text-md"}>{Math.round(movie?.vote_average ?? 0)} / 10</Text>
                        <Text className={"text-light-200 font-bold text-md"}>( {movie?.vote_count} votes )</Text>
                    </View>
                    <View className={"w-full mb-4"}>
                        <MovieInfo label={"Overview"} value={movie?.overview} />
                    </View>
                    <View className={"w-full mb-4 flex-row justify-between"}>
                        <MovieInfo label={"Release Date"} value={`${formatDate(movie?.release_date)} ( Worldwide )`} />
                        <MovieInfo label={"Status"} value={movie?.status} />
                    </View>
                    <MovieInfoMapList label={"Genres"} list={movie?.genres.map((e:any)=>e?.name)} />
                    <View className={"w-full mb-4"}>
                        <MovieInfo label={"Budget"} value={`$${movie?.budget / 1_000_000} million`} />
                    </View>
                    <View className={"w-full mb-4"}>
                        <MovieInfo label={"Revenue"} value={`$${movie?.revenue / 1_000_000} million`} />
                    </View>
                    <View className={"w-full mb-4"}>
                        <MovieInfo label={"Production Companies"} value={movie?.production_companies.map((e:any)=>e?.name).join(" - ") || "N/A"} />
                    </View>
                    <MovieInfoMapList label={"Hello"} list={movie?.production_companies.map((e:any)=>e?.name)} />

                </View>


            </ScrollView>
                )
            }
            <TouchableOpacity
                onPress={()=>router.back()}
                className={"fixed bottom-10 mx-auto w-[80%] flex-row justify-center items-center mt-5 bg-accent rounded-100 overflow-hidden p-2"} style={{borderRadius: 10}}>
                <Image source={icons.arrow} className={"rotate-180 size-10 font-bold"} tintColor={"white"} resizeMode={"contain"}/>
                <Text className={"text-white text-lg"}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
    export default MovieDetails
