import present from '@rebass/preset';

export const theme = {
  ...present,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    grayLighter: '#e7e7e7',
    grayDarker: '#b1b1b1',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    white: '#fff',
  },
  breakpoints: ['40em', '52em', '64em'], // 640px, 832px, 1024px
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export default theme;
