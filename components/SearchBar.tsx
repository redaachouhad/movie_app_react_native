import {View, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    onPress?: () => void;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string)=>void;
}


const SearchBar = ({onPress, placeholder, value, onChangeText}:Props) => {
    return (
        <View className={"flex-row w-full items-center pl-5"}>
            <Image source={icons.search} className={"size-5"} tintColor={"#ab8bff"} resizeMode={"contain"} />
             <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={"#a8b5db"}
                className={"flex-1 ml-2 text-black"}
            />
        </View>
    )
}
export default SearchBar
