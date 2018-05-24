import styled, { keyframes, injectGlobal } from 'react-emotion';
import { DESKTOP } from '../identity/contants';

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
  paddingBottom: 60,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [DESKTOP]: {
    paddingBottom: 180
  }
});

export const StatsContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 20px',

  [DESKTOP]: {}
});

export const Born = styled('h1')({
  width: 375,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  backgroundImage:
    '-webkit-linear-gradient(#378DBC 0%, #B6E8F1 46%, #ffffff 50%, #32120E 54%, #FFC488 58%, #582C11 90%, #EC9B4E 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '4px #f5f5f5',
  fontSize: 90,
  fontFamily: 'Titillium Web',
  fontStyle: 'italic',
  lineHeight: 1,
  marginRight: 0,

  [DESKTOP]: {
    fontSize: 120,
    marginRight: 100
  },

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

export const Date = styled('h3')({
  position: 'absolute',
  margin: '0px',
  fontFamily: 'Mr Dafoe',
  whiteSpace: 'nowrap',

  color: '#EB219B',
  marginLeft: 60,
  marginTop: 25,
  transform: 'rotate(-15deg)',
  fontSize: 40,
  WebkitTextFillColor: 'rgba(253, 90, 250, 1)',
  textShadow: '-2px -2px 0 #FFBAF2',
  WebkitFilter: 'drop-shadow(3px 3px 1px #441F62)',
  zIndex: 20,

  [DESKTOP]: {
    fontSize: 80,
    marginLeft: 100,
    marginTop: 35
  }
});

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
      WebkitAnimation: `${bounce} 4s ease alternate infinite`,
      animation: `${bounce} 4s ease alternate infinite`,
      backgroundSize: '300% 300%'
    }
  },
  props => ({ backgroundColor: props.color })
);

export const Name = styled('h1')({
  position: 'absolute',
  fontSize: '20vw',
  margin: '0px',
  fontFamily: 'Streamster',
  color: '#F975F7',
  transform: 'rotate(-15deg)',
  whiteSpace: 'nowrap',
  WebkitTransform: 'rotate(-15deg)' /* Safari and Chrome */,
  WebkitTextStroke: '1px #f008b7',
  WebkitFilter: 'drop-shadow(2px 2px 20px #f008b7)',
  zIndex: 20,

  [DESKTOP]: {
    fontSize: 180
  }
});

export const Stats = styled('h1')({
  justifyContent: 'center',
  position: 'relative',
  paddingTop: 60,
  paddingBottom: 100,
  fontSize: 40,
  position: 'relative',
  display: 'flex',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Righteous',

  [DESKTOP]: {
    paddingTop: 160
  }
});

export const StatsBody = styled('div')({
  WebkitBackgroundClip: 'text',
  margin: 0,
  backgroundImage:
    '-webkit-linear-gradient(#C3BFB4 0%, #FDFCFA 50%, #E8E7E5 51%, #757172 52%, #E8E9DB 100%)',
  WebkitFilter: 'drop-shadow(2px 2px 15px #3F59F4)',
  fontSize: 70,

  [DESKTOP]: {
    fontSize: 100
  }
});

export const Main = styled('div')({
  padding: '60px 0'
});

export const Red = styled('span')({
  fontFamily: 'Righteous',
  fontSize: 70,
  color: '#F10C20',
  WebkitTextFillColor: '#F10C20',
  WebkitTextStroke: 0,
  WebkitFilter: 'drop-shadow(2px 2px 15px #F10C20)',
  fontStyle: 'italic',
  [DESKTOP]: {
    fontSize: 100
  }
});

export const RandomDiv = styled('div')({
  height: '100%'
});

export const Green = styled('span')({
  fontFamily: 'Righteous',
  fontSize: 70,
  color: '#6BFF2B',
  WebkitTextFillColor: '#6BFF2B',
  WebkitTextStroke: 0,
  WebkitFilter: 'drop-shadow(2px 2px 15px #6BFF2B)',
  fontStyle: 'italic',
  [DESKTOP]: {
    fontSize: 100
  }
});

export const Blue = styled('span')({
  fontFamily: 'Righteous',
  fontSize: 70,
  color: '#3F59F4',
  WebkitTextFillColor: '#3F59F4',
  WebkitTextStroke: 0,
  WebkitFilter: 'drop-shadow(2px 2px 15px #3F59F4)',
  fontStyle: 'italic',

  [DESKTOP]: {
    fontSize: 100
  }
});

export const TheStats = styled('h3')({
  position: 'absolute',
  fontFamily: 'Monoton',
  fontVariant: 'small-caps',
  whiteSpace: 'nowrap',
  marginBottom: 0,
  marginLeft: 80,
  marginTop: 10,
  WebkitTransform: 'skew(-15deg,-15deg)',
  backgroundImage: '-webkit-linear-gradient(#FF0FF8 0%,  #F9F9F7 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitFilter: 'drop-shadow(2px 2px 20px #f008b7)',
  fontSize: 40,

  [DESKTOP]: {
    fontSize: 80,
    marginLeft: 130,
    marginTop: 80
  },

  '&:after': {
    position: 'absolute',
    content: '""',
    left: 0,
    top: 0,
    width: 0,
    height: 80,
    backgroundImage: '-webkit-radial-gradient(#fff 0%, transparent 85%)',
    zIndex: 4
  }
});
