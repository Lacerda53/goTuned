import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './global/theme';
import { HomeScreen } from './screens/Home';

export const App: React.FC = () => {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.background} />
            <ThemeProvider theme={theme}>
                <HomeScreen />
            </ThemeProvider>
        </>
    );
};
