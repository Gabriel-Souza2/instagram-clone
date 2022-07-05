import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from '@expo/vector-icons/Ionicons';

import { Home } from '../screens/Home';
import { useTheme } from 'styled-components';
import { Avatar } from '../components/Avatar';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomMenuRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarActiveTintColor: theme.colors.text,
                tabBarStyle:{ 
                    backgroundColor: theme.colors.background_primary,
                    borderTopWidth: 1,
                    borderTopColor: theme.colors.border_color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }
            }}
        >
            <Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: (({focused, color, size}) => (
                        focused ? 
                        <Ionicons 
                            name="home" 
                            color={color} 
                            size={28} 
                        />
                        :
                        <Ionicons 
                            name="home-outline" 
                            color={color} 
                            size={28} 
                        />  
                    ))
                }}
            />

            <Screen 
                name="search"
                component={() => <></>}
                options={{
                    tabBarIcon: (({focused, color, size}) => (
                        focused ? 
                        <Ionicons 
                            name="search" 
                            color={color} 
                            size={28} 
                        />
                        :
                        <Ionicons 
                            name="search-outline" 
                            color={color} 
                            size={28} 
                        />  
                    ))
                }}
            />

            <Screen 
                name="reels"
                component={() => <></>}
                options={{
                    tabBarIcon: (({focused, color, size}) => (
                        focused ? 
                        <Ionicons 
                            name="videocam" 
                            color={color} 
                            size={28} 
                        />
                        :
                        <Ionicons 
                            name="videocam-outline" 
                            color={color} 
                            size={28} 
                        />  
                    ))
                }}
            />

            <Screen 
                name="sales"
                component={() => <></>}
                options={{
                    tabBarIcon: (({focused, color, size}) => (
                        focused ? 
                        <Ionicons 
                            name="wallet" 
                            color={color} 
                            size={28} 
                        />
                        :
                        <Ionicons 
                            name="wallet-outline" 
                            color={color} 
                            size={28} 
                        />
                    ))
                }}
            />

            <Screen 
                name="Avatar"
                component={Home}
                options={{
                    tabBarIcon: (({focused, color, size}) => (
                        <Avatar
                            uri='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                            size={28}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}
