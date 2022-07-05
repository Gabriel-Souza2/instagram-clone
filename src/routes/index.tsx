import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomMenuRoutes } from './bottomMenuRoutes.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <BottomMenuRoutes />
        </NavigationContainer>
    );
}