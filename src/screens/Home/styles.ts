import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    position: absolute;
    width: 100%;
    top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
    margin-bottom: 10%;
`;

export const CenterContainer = styled.View`
    padding-top: 35px;
`;

export const Foter = styled.View`
    position: absolute;
    width: 100%;
    padding: 0 20px;
    bottom: ${getBottomSpace() + 20}px;
`;