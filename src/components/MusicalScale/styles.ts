import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { toAlpha } from '../../utils/toAlpha';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NoteContaienr = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type NoteProps = {
    marked: boolean;
    color: string;
};

export const NoteCircle = styled.View<NoteProps>`
    width: ${width / 10}px;
    height: ${width / 10}px;
    flex-direction: row;
    border: 1px solid ${({ theme }) => toAlpha(theme.colors.gray, 50)};
    border-radius: ${width / 5}px;
    justify-content: center;
    align-items: center;
    
    ${({ marked, color }) => marked && css`
        border: 0;
        background: ${({ theme }) => theme.colors[color]};
    `}
`;
