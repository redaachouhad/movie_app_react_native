import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images";

interface ProfileInfoProps {
    label: string,
    value: string,
}

const ProfileInfo = ({label, value}: ProfileInfoProps)=>{
    return <View className={"flex-col w-full mb-5"}>
        <Text className={"text-accent text-lg"}>{label}:</Text>
        <Text className={"text-white text-lg"}>{value}</Text>
    </View>
}


const Profile = () => {
    return (
        <View className={"flex-1 bg-primary pt-6 px-5 flex-col"}>
           <ScrollView className={"pb-50"}>
               <View className={"flex-row justify-end w-full mb-5"}>
                   <TouchableOpacity className={"bg-purple-950 px-6 py-4 border-2 border-red-700 rounded-full"}>
                       <Text className={"text-white text-lg"}>Logout</Text>
                   </TouchableOpacity>
               </View>

               <Image source={images.man} className={"w-80 h-80 mx-auto my-10 rounded-full border-[5px] border-blue-400"} resizeMode={"contain"}/>

               <Text className={"text-white mb-5 text-2xl"}>Personal Information:</Text>
               <ProfileInfo label={"First Name"} value={"John"}/>
               <ProfileInfo label={"Last Name"} value={"Kim"}/>
               <ProfileInfo label={"Email"} value={"example@gmail.com"}/>

           </ScrollView>
        </View>
    )
}
export default Profile;
