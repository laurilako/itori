import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const styles = {
  global: props => ({
    body: {
      // color: mode('black', '#FCFFFD')(props),
      color: mode('black', '#FCFFFD')(props),
      bg: mode('#EEEEEE', '#06082a')(props),
    },
  }),
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
    },
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #046b99',
      },
      outline: props => ({
        borderColor: props.colorMode === 'dark' ? '#5299D3' : '#5299D3',
      }),
    },
  },
  Input: {
    
  }
};

const theme = extendTheme({
  breakpoints,
  config,
  components,
  styles,
});

export default theme;