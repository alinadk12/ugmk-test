import { createTheme } from '@mui/material/styles';

const neutral = {
  neutral10: '#1A1A1A',
  neutral30: '#4D4D4D',
  neutral50: '#808080',
  neutral70: '#B3B3B3',
  neutral80: '#CCCCCC',
  neutral90: '#E6E6E6',
  neutral95: '#F2F2F2',
  neutral100: '#FFFFFF'
}

const palette = {
  primary: {
    main: '#083EC6',
    light: '#CDE1FE'
  },
  secondary: {
    main: '#FD3A3A'
  },
  success: {
    main: '#03A557',
    light: '#C6F8E0'
  },
  error: {
    main: '#FD3A3A',
    light: '#FFDBDB',
    dark: '#B80000'
  },
  warning: {
    main: '#F09205',
    light: '#FFF5E6'
  },
  backgroundPrimary: '#FBFBFB',
  ...neutral,
};

const theme = createTheme({
  palette: {...palette},
})

export default theme
