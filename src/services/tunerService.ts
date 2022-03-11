import { Dimensions } from 'react-native';
import { middleA, semitone } from './configs';

export function getNote(frequency: number): number {
  const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
  return Math.round(note) + semitone;
}

function getStandardFrequency(note: number) {
  return middleA * Math.pow(2, (note - semitone) / 12);
}

export function getCents(frequency: number, note: number) {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2)
  );
}