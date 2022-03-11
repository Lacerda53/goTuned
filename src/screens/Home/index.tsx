import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BaseLines } from '../../components/BaseLines';
import { MusicalScale } from '../../components/MusicalScale';
import { Dimensions, PermissionsAndroid, Platform } from 'react-native';
import { Cifra } from '../../components/Cifra';
import Logo from '../../assets/logo.svg'
import Recording from 'react-native-recording';
import PitchFinder from 'pitchfinder';
import {
    CenterContainer,
    Container,
    Content,
    Foter,
    Header
} from './styles';
import { bufferSize, noteStrings, sampleRate } from '../../services/configs';
import { getCents, getNote } from '../../services/tunerService';

type NoteProps = {
    chord: string;
    frequency: number;
    cents: number;
    octave: number;
};

const rangerValid = 20

export const HomeScreen: React.FC = () => {
    const { width } = Dimensions.get('window');
    const [note, setNote] = useState<NoteProps>({
        cents: 0,
        chord: '',
        frequency: 0,
        octave: 0
    });

    const chordColor = useMemo(() => {

        if (note.cents > rangerValid) {

            return 'danger'
        }

        if (note.cents < -rangerValid) {

            return 'warning'
        }

        return 'primary'
    }, [note.cents]);

    const requestPermission = useCallback(async () => {

        try {

            if (Platform.OS === 'android') {

                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                );

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                    return true;
                }

                return false;
            }

            return true;
        } catch {

            return false;
        }
    }, []);

    useEffect(() => {

        async function initialize() {

            const permission = await requestPermission();

            if (permission) {

                const pitchFinder = PitchFinder.YIN({ sampleRate });

                Recording.init({
                    sampleRate: sampleRate,
                    bufferSize: bufferSize,
                });

                Recording.start();

                const listener = Recording.addRecordingEventListener((data: Float32Array) => {
                    const frequency = pitchFinder(data);

                    if (frequency) {

                        const note = getNote(frequency);

                        setNote({
                            chord: noteStrings[note % 12],
                            octave: parseInt(String(note / 12)) - 1,
                            cents: getCents(frequency, note),
                            frequency: frequency
                        })
                    }
                });

                return () => {
                    Recording.stop();
                    listener.remove();
                };
            }
        }

        initialize();
    }, []);

    return (
        <Container>
            <Header>
                <Logo width={width / 13} />
            </Header>
            <Content>
                <Cifra
                    octave={note.octave}
                    cifra={note.chord}
                    color={chordColor}
                    frequency={note.frequency}
                />
                <CenterContainer>
                    <BaseLines color={chordColor} cents={note.cents} />
                </CenterContainer>
            </Content>
            <Foter>
                <MusicalScale
                    cifraTuning={note.chord}
                    color={chordColor}
                />
            </Foter>
        </Container>
    );
};
