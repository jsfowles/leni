import styled, { keyframes, injectGlobal } from 'react-emotion';

export const Bounce = keyframes`
0% {
  background-position: 0% 50%
}
50% {
  background-position: 100% 50%
}
100% {
  background-position: 0% 50%
}
`;

export const Border = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'black',
  position: 'relative',
  zIndex: 2,
  borderRadius: '50%'
});

export const Div = styled('div')({
  position: 'relative',
  width: '80%',
  maxWidth: '1000px',

  '&:after': {
    content: '""',
    display: 'block',
    paddingBottom: '100%'
  }
});

export const Container = styled('div')(
  {
    borderWidth: '0.5vw',
    background: 'black',
    position: 'absolute',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    '&:after': {
      boxShadow: '0 0 50px hotpink',
      content: '""',
      position: 'absolute',
      top: 'calc(-1 * 0.5vw)',
      left: 'calc(-1 * 0.5vw)',
      height: 'calc(100% + 0.5vw * 2)',
      width: 'calc(100% + 0.5vw * 2)',
      background:
        'linear-gradient(60deg, hotpink, #ff0084, #f80759, #5073b8, #1098ad, #07b39b, #6fba82)',
      borderRadius: '50%',
      zIndex: 1,
      animation: `${Bounce} 3s ease alternate infinite`,
      backgroundSize: '300% 300%'
    }
  },
  props => ({ backgroundColor: props.color })
);

export const Emotion = styled('h1')(
  {
    fontFamily: 'Streamster',
    color: 'hotpink',
    textShadow: '2px 4px #1098ad',
    padding: '0 15px'
  },
  props => ({ fontSize: props.fontSize })
);

export const Main = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage:
    'url("https://www.natewren.com/themes/wallpaper2/radpack/radpack_14.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
});
