import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

const { height, width } = Dimensions.get('window');

const maxHeight = height / 4.5;
const maxWidth = width / 120;

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

type LinePros = {
    isCenter?: boolean;
    isMedium?: boolean;
};

type PointerProps = {
    color: string;
};

export const Line = styled.View<LinePros>`
    background: ${({ theme }) => theme.colors.gray};
    width: ${maxWidth / 2}px;
    border-radius: 50px;
    height: ${maxHeight / 3}px;

    ${({ isMedium }) => isMedium && css`
        height: ${maxHeight / 2}px;
    `}

    ${({ isCenter }) => isCenter && css`
        height: ${maxHeight}px;
    `}
`;

export const Pointer = styled(Animated.View) <PointerProps>`
    background: ${({ theme, color }) => theme.colors[color]};
    position: absolute;
    left: ${(width / 2) - 20}px;
    width: ${maxWidth}px;
    border-radius: 50px;
    height: ${maxHeight}px;
`;