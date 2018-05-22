import * as React from 'react';

import {
  Main,
  IntrinsicContainer,
  NameContainer,
  Name,
  Border,
  Container,
  Date,
  Born,
  StatsBody,
  Stats,
  TheStats,
  Red,
  Green,
  Blue,
  DateContainer,
  StatsContainer
} from './styles';

import styles from '../styles/styles';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <Main>
          <DateContainer>
            <Born>BORN</Born>
            <Date fontSize={'80px'}>May 6th, 2018</Date>
          </DateContainer>
          <Container>
            <IntrinsicContainer>
              <NameContainer>
                <Border>
                  <Name fontSize={'150px'}>Eleanor Ray</Name>
                </Border>
              </NameContainer>
            </IntrinsicContainer>
          </Container>
          <StatsContainer>
            <Stats>
              <StatsBody fontSize={'100px'}>STATS</StatsBody>
              <Red>I</Red>
              <Green>I</Green>
              <Blue>I</Blue>
            </Stats>
            <TheStats>4lbs. 6oz</TheStats>
          </StatsContainer>
        </Main>
      </React.Fragment>
    );
  }
}
