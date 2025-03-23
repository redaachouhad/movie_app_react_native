import {View, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    onPress?: () => void;
    placeholder: string;
}


const SearchBar = ({onPress, placeholder}:Props) => {
    return (
        <View className={"flex-row w-full items-center"}>
            <Image source={icons.search} className={"size-5"} tintColor={"#ab8bff"} resizeMode={"contain"} />
             <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={""}
                onChangeText={()=>{}}
                placeholderTextColor={"#a8b5db"}
                className={"flex-1 ml-2 text-white"}
            />
        </View>
    )
}
export default SearchBar
