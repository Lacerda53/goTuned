import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { Text } from './styles';

export type Props = TextProps & {
	color?: string;
	size?: number;
	align?: string;
	weight?: 'regular' | 'semiBold' | 'black';
	margin?: string;
	lineHeight?: number;
	padding?: string;
	opacity?: number;
	children: ReactNode;
};

export const CustomText: React.FC<Props> = ({ children, ...rest }) => {
	return <Text {...rest}>{children}</Text>;
};