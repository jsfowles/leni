import styled, { keyframes, injectGlobal } from 'react-emotion';

export const bounce = keyframes`
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

export const chromeEffect = keyframes`
  0% {background-position:0 0;}
  10% {background-position:420px 0;}
  100% {background-position:420px 0;}
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

export const IntrinsicContainer = styled('div')({
  position: 'relative',
  width: '80%',
  maxWidth: '500px',

  '&:after': {
    content: '""',
    display: 'block',
    paddingBottom: '100%'
  }
});

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const DateContainer = styled('div')({
  padding: '60px 0',
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Born = styled('h1')({
  width: 275,
  position: 'relative',
  backgroundImage:
    '-webkit-linear-gradient(#378DBC 0%, #B6E8F1 46%, #ffffff 50%, #32120E 54%, #FFC488 58%, #582C11 90%, #EC9B4E 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '4px #f5f5f5',
  fontSize: 100,
  fontFamily: 'Titillium Web',
  fontStyle: 'italic',
  margin: 0,
  lineHeight: 1,

  '&:before': {
    content: '"BORN"',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    backgroundPosition: '-680px 0',
    WebkitBackgroundClip: 'text',
    WebkitTextStroke: 0,
    paddingRight: 300
  }
});

export const Date = styled('h3')(
  {
    position: 'absolute',
    margin: '0px',
    fontFamily: 'Mr Dafoe',
    color: '#F975F7',
    marginLeft: 150,
    marginTop: 42,
    transform: 'rotate(-15deg)',
    fontSize: 150,
    WebkitTransform: 'rotate(-15deg)' /* Safari and Chrome */,
    WebkitTextStroke: '1px #f008b7',
    WebkitFilter: 'drop-shadow(2px 2px 20px #f008b7)',
    zIndex: 20
  },
  props => ({ fontSize: props.fontSize })
);

export const NameContainer = styled('div')(
  {
    borderWidth: '0.8vw',
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
      top: 'calc(-1 * 0.8vw)',
      left: 'calc(-1 * 0.8vw)',
      height: 'calc(100% + 0.8vw * 2)',
      width: 'calc(100% + 0.8vw * 2)',
      background:
        'linear-gradient(60deg, hotpink, #ff0084, #f80759, #5073b8, #1098ad, #07b39b, #6fba82)',
      borderRadius: '50%',
      zIndex: 1,
      WebkitAnimation: `${bounce} 3s ease alternate infinite`,
      animation: `${bounce} 10s ease alternate infinite`,
      backgroundSize: '300% 300%'
    }
  },
  props => ({ backgroundColor: props.color })
);

export const Name = styled('h1')(
  {
    position: 'absolute',
    margin: '0px',
    fontFamily: 'Mr Dafoe',
    color: '#F975F7',
    transform: 'rotate(-15deg)',

    WebkitTransform: 'rotate(-15deg)' /* Safari and Chrome */,
    WebkitTextStroke: '1px #f008b7',
    WebkitFilter: 'drop-shadow(2px 2px 20px #f008b7)',
    zIndex: 20
  },
  props => ({ fontSize: props.fontSize })
);

export const Main = styled('div')({
  background: 'black',
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url("../static/radpack_14-min.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});
