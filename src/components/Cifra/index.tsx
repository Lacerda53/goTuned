import React from 'react';
import { CustomText } from '../CustomText';
import { CentsContainer, Container, Row } from './styles';

type Props = {
    cifra: string;
    color: string;
    frequency: number;
    octave: number;
};

export const Cifra: React.FC<Props> = ({
    cifra,
    octave,
    color,
    frequency
}) => {

    if (!cifra) {

        return (
            <Container>
                <CustomText
                    size={36}
                    align='center'
                >
                    Toque uma nota para afina-la
                    {cifra}
                </CustomText>
                <CustomText
                    size={18}
                > </CustomText>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <CustomText
                    color={color}
                    size={96}
                >
                    {cifra}
                </CustomText>
                <CentsContainer>
                    <CustomText
                        size={18}
                        color='white'
                        opacity={.3}
                    >
                        {octave}
                    </CustomText>
                </CentsContainer>
            </Row>
            <CustomText
                size={18}
                color='white'
                opacity={.3}
            >
                {frequency.toFixed(1)} Hz
            </CustomText>
        </Container>
    );
};