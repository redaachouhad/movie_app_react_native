import {Image, ScrollView, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
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
               <SearchBar
                onPress={() => router.push("/search")}
                placeholder={"Search"}
               />
           </ScrollView>
        </View>
    )
}
export default Index;
