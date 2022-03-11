import React, { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Container, Line, Pointer } from './styles';

type Props = {
    color: string;
    cents: number;
};

export const BaseLines: React.FC<Props> = ({ color, cents }) => {
    const lines = Array.from(Array(25));
    const pointerAnimated = useSharedValue(cents);

    const stylesAnimated = useAnimatedStyle(() => ({
        transform: [{
            translateX: withSpring(cents)
        }]
    }));

    useEffect(() => {

        pointerAnimated.value = cents;
    }, [cents]);

    return (
        <Container>
            {lines.map((_, index) => {
                const newIndex = index + 3;
                const isCenter = index + 1 === 13;
                const isMedium = (newIndex + 1) % 5 === 1;

                return (
                    <Line
                        key={index}
                        {...{
                            isCenter,
                            isMedium
                        }}
                    />
                );
            })}
            <Pointer color={color} style={stylesAnimated} />
        </Container>
    );
};