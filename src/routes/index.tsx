import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomMenuRoutes } from './bottomMenuRoutes.routes';
import { StackRoutes } from './stackRoutes.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}