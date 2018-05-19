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
  paddingTop: '60px',
  paddingBottom: '120px',
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const StatsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Born = styled('h1')({
  width: 375,
  position: 'relative',
  backgroundImage:
    '-webkit-linear-gradient(#378DBC 0%, #B6E8F1 46%, #ffffff 50%, #32120E 54%, #FFC488 58%, #582C11 90%, #EC9B4E 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '4px #f5f5f5',
  fontSize: 120,
  fontFamily: 'Titillium Web',
  fontStyle: 'italic',
  marginRight: 100,
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
    color: '#EB219B',
    marginLeft: 100,
    marginTop: 35,
    transform: 'rotate(-15deg)',
    fontSize: 150,
    WebkitTextFillColor: 'rgba(253, 90, 250, 1)',
    textShadow: '-2px -2px 0 #FFBAF2',
    WebkitFilter: 'drop-shadow(3px 3px 1px #441F62)',
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

export const Stats = styled('h1')(
  {
    position: 'relative',
    WebkitTextFillColor: 'transparent',
    WebkitTextStroke: '0.1px #f1f1f1',
    fontFamily: 'Righteous',

    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background:
        'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 2px)'
    }
  },
  props => ({ fontSize: props.fontSize })
);

export const StatsBody = styled('h1')(
  {
    WebkitBackgroundClip: 'text',
    backgroundImage:
      '-webkit-linear-gradient(#C3BFB4 0%, #FDFCFA 50%, #E8E7E5 51%, #757172 52%, #E8E9DB 100%)',
    WebkitFilter: 'drop-shadow(2px 2px 15px #3F59F4)'
  },
  props => ({ fontSize: props.fontSize })
);

export const Main = styled('div')({
  background: 'black',
  height: '100%',
  width: '100vw',
  backgroundImage: 'url("../static/radpack_14-min.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});
