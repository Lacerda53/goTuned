import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export type TextProps = {
	color?: string;
	size?: number;
	align?: string;
	weight?: 'regular' | 'semiBold' | 'bold';
	margin?: string;
	lineHeight?: number;
	padding?: string;
	opacity?: number;
};

export const Text = styled.Text<TextProps>`
    color: ${({ theme, color }) => theme.colors[color || 'gray']};
    font-size: ${({ size }) => RFValue(size || 14)}px;
    font-family: ${({ theme, weight }) => theme.fonts[weight || 'regular']};
    margin: ${({ margin }) => margin || 0};
    padding: ${({ padding }) => padding || 0};
    line-height: ${({ lineHeight, size }) => RFValue(lineHeight || size || 14) + 7}px;
    opacity: ${({ opacity }) => opacity || 1};
    text-align: ${({ align }) => align || 'left'};
`;