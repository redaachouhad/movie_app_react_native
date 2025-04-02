import {ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

const Saved = () => {
    return (
        <View className={"flex-1 bg-primary"}>
            <View className={"flex-row justify-center items-center mt-10"}>
                <Image source={icons.logo} className={"w-14 h-12 my-5 mx-auto"}/>
            </View>
            <Text className={"text-white text-xl mx-5 font-bold"}>Saved Movies</Text>
            {/*<FlatList*/}
            {/*    data={}*/}
            {/*    renderItem={}*/}
            {/*/>*/}
        </View>
    )
}
export default Saved;
