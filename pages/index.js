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
  StatsContainer,
  RandomDiv
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
      <Main>
        <DateContainer>
          <Born>BORN</Born>
          <Date>May 6th, 2018</Date>
        </DateContainer>
        <Container>
          <IntrinsicContainer>
            <NameContainer>
              <Border>
                <Name>Eleanor Ray</Name>
              </Border>
            </NameContainer>
          </IntrinsicContainer>
        </Container>
        <StatsContainer>
          <Stats>
            <StatsBody>STATS</StatsBody>
            <Red>I</Red>
            <Green>I</Green>
            <Blue>I</Blue>
          </Stats>
          <TheStats>4lbs. 11oz</TheStats>
        </StatsContainer>
      </Main>
    );
  }
}
