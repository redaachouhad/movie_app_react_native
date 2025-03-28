import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from "@/hooks/useFetch";
import {fetchMovies} from "@/services/api";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import {arrayOf} from "prop-types";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        refetch: loadMovies,
        reset
    } = useFetch(()=>fetchMovies({ query: searchQuery}), false);

    useEffect(() => {
        const timeoutId = setTimeout(async ()=> {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                reset();
            }
        },500);
        return () => clearTimeout(timeoutId);
    }, [searchQuery.trim()]);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full left-0 top-0 z-0" resizeMode="cover" />
            <FlatList
                data={movies}
                keyExtractor={(item)=>item.id.toString()}
                scrollEnabled={true}
                numColumns={3}
                columnWrapperStyle={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 10,
                    gap: 15
                }}
                contentContainerStyle={{
                    paddingBottom: 100,
                    paddingTop: 20,
                    paddingHorizontal: 10,
                }}
                renderItem={
                    ({item}) =>(
                        <MovieCard {...item}/>
                    )
                }
                ListHeaderComponent={
                <>
                    <View className={"flex-row w-full justify-center items-center py-6"}>
                        <Image source={icons.logo} className={"w-16 h-12"}/>
                    </View>
                    <View className={" bg-white rounded-full my-6"} >
                        <SearchBar placeholder={'Search movies ...'} value={searchQuery} onChangeText={(text: string)=>setSearchQuery(text)}/>
                    </View>
                    {
                        !searchQuery &&
                        <View className={"flex-row justify-center items-center"}>
                            <Text className={"text-gray-300 text-xl"}>Try to search something ...</Text>
                        </View>
                    }
                    {
                       moviesLoading && <ActivityIndicator size={"large"} color={"#0000ff"} className={"my-3"} />
                    }
                    {
                        moviesError && <Text className={"text-red-500 text-lg my-3"}>Error occurs: {moviesError?.message}</Text>
                    }
                    {
                        !moviesLoading && !moviesError && searchQuery.trim() && arrayOf(movies).length > 0 && (
                            <View className="my-4">
                                <Text className={"text-xl text-white font-bold"}>
                                    Search Result for {" "}
                                    <Text className={"text-accent"}>{searchQuery}</Text>
                                </Text>
                            </View>
                        )
                    }
                </>
                }
            />


        </View>
    )

}
export default Search;
