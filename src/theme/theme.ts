import { Palette, PaletteOptions } from "@mui/material/styles";
import { createTheme, ThemeOptions } from '@mui/material/styles';

const lightPalette: ThemeOptions['palette'] = {
  primary: {
    main: "#65558F",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#625B71",
    contrastText: "#FFFFFF",
  },
//   tertiary: {
//     main: "#7D5260",
//     contrastText: "#FFFFFF",
//   },
  error: {
    main: "#B3261E",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FEF7FF",
    paper: "#FEF7FF",
  },
  text: {
    primary: "#1D1B20",
    secondary: "#49454F",
  },
  surface: {
    default: "#FEF7FF",
    onSurface: "#1D1B20",
    surfaceVariant: "#E7E0EC",
    onSurfaceVariant: "#49454F",
  },
  primaryContainer: {
    main: "#EADDFF",
    contrastText: "#21005D",
  },
  secondaryContainer: {
    main: "#E8DEF8",
    contrastText: "#1D192B",
  },
  tertiaryContainer: {
    main: "#FFD8E4",
    contrastText: "#31111D",
  },
  errorContainer: {
    main: "#F9DEDC",
    contrastText: "#410E0B",
  },
  outline: {
    main: "#79747E",
    variant: "#CAC4D0",
  },
  shadow: "#000000",
  scrim: "#000000",
//   inverseSurface: {
//     main: "#322F35",
//     onInverseSurface: "#F5EFF7",
//     inversePrimary: "#D0BCFF",
//   },
  fixed: {
    primary: "#EADDFF",
    onPrimary: "#21005D",
    primaryDim: "#D0BCFF",
    onPrimaryVariant: "#4F378B",
    secondary: "#E8DEF8",
    onSecondary: "#1D192B",
    secondaryDim: "#CCC2DC",
    onSecondaryVariant: "#4A4458",
    tertiary: "#FFD8E4",
    onTertiary: "#31111D",
    tertiaryDim: "#EFB8C8",
    onTertiaryVariant: "#633B48",
  },
//   surfaceContainers: {
//     lowest: "#FFFFFF",
//     low: "#F7F2FA",
//     default: "#F3EDF7",
//     high: "#ECE6F0",
//     highest: "#E6E0E9",
//     dim: "#DED8E1",
//     bright: "#FEF7FF",
//   },
};

const theme = createTheme({
    palette: {
      mode: 'light',
      ...lightPalette,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: lightPalette?.background?.default,
            color: lightPalette?.text?.primary,
          },
        },
      },
    },
  });

export default theme;





declare module '@mui/material/styles' {
  interface Palette {
    primaryContainer?: Palette['primary'];
    secondaryContainer?: Palette['secondary'];
    tertiaryContainer?: Palette['primary']; // Use 'primary' as the base type for tertiaryContainer
    errorContainer?: Palette['error'];
    surface?: {
      default: string;
      onSurface: string;
      surfaceVariant: string;
      onSurfaceVariant: string;
    };
    outline?: {
      main: string;
      variant: string;
    };
    shadow?: string;
    scrim?: string;
    fixed?: {
      primary: string;
      onPrimary: string;
      primaryDim: string;
      onPrimaryVariant: string;
      secondary: string;
      onSecondary: string;
      secondaryDim: string;
      onSecondaryVariant: string;
      tertiary: string;
      onTertiary: string;
      tertiaryDim: string;
      onTertiaryVariant: string;
    };
  }

  interface PaletteOptions {
    primaryContainer?: PaletteOptions['primary'];
    secondaryContainer?: PaletteOptions['secondary'];
    tertiaryContainer?: PaletteOptions['primary']; // Use 'primary' as the base type for tertiaryContainer
    errorContainer?: PaletteOptions['error'];
    surface?: {
      default: string;
      onSurface: string;
      surfaceVariant: string;
      onSurfaceVariant: string;
    };
    outline?: {
      main: string;
      variant: string;
    };
    shadow?: string;
    scrim?: string;
    fixed?: {
      primary: string;
      onPrimary: string;
      primaryDim: string;
      onPrimaryVariant: string;
      secondary: string;
      onSecondary: string;
      secondaryDim: string;
      onSecondaryVariant: string;
      tertiary: string;
      onTertiary: string;
      tertiaryDim: string;
      onTertiaryVariant: string;
    };
  }
}

