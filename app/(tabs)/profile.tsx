import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

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
        <View className={"flex-1 bg-primary pt-6 px-5"}>
            <View className={"flex-row justify-end w-full"}>
                <TouchableOpacity className={"bg-purple-950 px-6 py-4 border border-red-700 rounded-full"}>
                    <Text className={"text-white"}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Text className={"text-white mb-5 text-2xl"}>Personal Information:</Text>
            <ProfileInfo label={"First Name"} value={"John"}/>
            <ProfileInfo label={"Last Name"} value={"Kim"}/>
            <ProfileInfo label={"Email"} value={"example@gmail.com"}/>
        </View>
    )
}
export default Profile;
