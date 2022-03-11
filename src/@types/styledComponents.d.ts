import 'styled-components';
import { theme } from '../global/theme';

type ColorsProps = typeof theme.colors & {
	[x: string]: string;
}

type FontsProps = typeof theme.fonts & {
	[x: string]: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsProps;
		fonts: FontsProps;
	}
}