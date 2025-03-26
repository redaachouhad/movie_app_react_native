import {ActivityIndicator, FlatList, Image, ScrollView, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import useFetch from "@/hooks/useFetch";
import {fetchMovies} from "@/services/api";
import MovieCard from "@/components/MovieCard";

const Index = () => {
    const router = useRouter();
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(()=>fetchMovies({ query: ''}));

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full left-0 top-0 z-0" />
            <ScrollView
               className={"flex-1 px-5"}
               showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    paddingBottom: 10,
                }}
            >

                <Image source={icons.logo} className={"w-14 h-12 mt-16 mb-5 mx-auto"}/>
                {
                    moviesLoading ? (
                        <ActivityIndicator
                            size="large"
                            color="#0000ff"
                            className="mt-10 self-center"
                        />
                    ): moviesError ? (
                        <Text>Error: {moviesError?.message}</Text>
                    ):(
                        <View className={"flex-1 mt-5"}>
                            <SearchBar
                                onPress={() => router.push("/search")}
                                placeholder={"Search"}
                            />
                            <>
                                <Text className="text-white text-xl font-bold mt-5 mb-3">Latest Movies</Text>
                                <FlatList
                                    data={movies}
                                    keyExtractor={(item)=>item.id.toString()}
                                    scrollEnabled={false}
                                    numColumns={3}
                                    columnWrapperStyle={{
                                        justifyContent: "flex-start",
                                        gap: 20,
                                        paddingRight:5,
                                        marginBottom: 10
                                    }}
                                    className={"mt-2 pb-32 flex"}
                                    renderItem={
                                        ({item}) =>(
                                            <MovieCard {...item}/>
                                        )
                                    }
                                />
                            </>
                        </View>
                    )
                }

           </ScrollView>
        </View>
    )
}
export default Index;
