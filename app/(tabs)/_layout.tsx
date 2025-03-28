import {View, Text, ImageBackground, Image, ImageSourcePropType} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";


const IconTab = ({focused, icon, title}:{focused: boolean, icon: ImageSourcePropType, title: string}) => {
    return (
        focused ? (
            <>
                <ImageBackground
                    source={images.highlight}
                    className="flex flex-row flex-1 w-full min-w-[112px] justify-center items-center min-h-14 rounded-full overflow-hidden gap-3"
                >
                    <Image
                        source={icon}
                        tintColor="#151312"
                        className="size-5"
                    />

                    <Text className="text-secondary text-base font-semibold">{title}</Text>
                </ImageBackground>
            </>
            ) : (<View className={"size-full flex-row justify-center items-center rounded-full"}>
            <Image
                source={icon}
                tintColor="#A8B5DB"
                className="size-5"
            />
        </View>)
    );
}

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                tabBarStyle: {
                    backgroundColor: "#26004d",
                    borderRadius: 50,
                    marginBottom: 30,
                    alignItems: 'center',
                    height: 49,
                    position: 'absolute',
                    marginHorizontal: 20,
                    overflow: 'hidden',
                    width: '90%',
                    borderWidth: 1,
                    borderColor: '#0f0d23',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} icon={icons.home} title={"Home"}/>
                    )
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} icon={icons.search} title={"Search"}/>
                    )
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} icon={icons.save} title={"Saved"}/>
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} icon={icons.person} title={"Profile"}/>
                    )
                }}
            />

        </Tabs>
    )
}
export default TabLayout
