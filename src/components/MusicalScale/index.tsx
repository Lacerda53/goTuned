import React from 'react';
import { CustomText } from '../CustomText';
import { Container, NoteCircle, NoteContaienr } from './styles';

const notes = [
    {
        chord: 'Dó',
        cifra: 'C'
    },
    {
        chord: 'Ré',
        cifra: 'D'
    },
    {
        chord: 'Mi',
        cifra: 'E'
    },
    {
        chord: 'Fá',
        cifra: 'F'
    },
    {
        chord: 'Sol',
        cifra: 'G'
    },
    {
        chord: 'Lá',
        cifra: 'A'
    },
    {
        chord: 'Si',
        cifra: 'B'
    },
];

type Props = {
    cifraTuning?: string;
    color?: string;
};

export const MusicalScale: React.FC<Props> = ({
    cifraTuning,
    color = 'primary'
}) => {
    return (
        <Container>
            {notes.map((item, index) => {
                const marked = cifraTuning?.charAt(0) === item.cifra;
                
                return (
                    <NoteContaienr key={index}>
                        <NoteCircle marked={marked} color={color}>
                            <CustomText
                                color={marked ? 'background' : 'gray'}
                                weight='semiBold'
                                size={17}
                            >
                                {item.cifra}
                            </CustomText>
                            <CustomText
                                color='background'
                                weight='semiBold'
                                size={10}
                            >
                                {marked && cifraTuning?.charAt(1) && '♯'}
                            </CustomText>
                        </NoteCircle>
                        <CustomText
                            margin='5px 0 0 0 '
                            color={marked ? 'white' : 'gray'}
                        >
                            {item.chord}
                        </CustomText>
                    </NoteContaienr>
                )
            })}
        </Container>
    );
};