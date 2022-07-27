import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Comments } from '../screens/Comments';
import { BottomMenuRoutes } from './bottomMenuRoutes.routes';

const {Navigator, Screen} = createNativeStackNavigator();


export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                component={BottomMenuRoutes}
                name="BottomMenuRoutes"
            />

            <Screen 
                component={Comments}
                name="Comments"
            />
        </Navigator>

    );
}