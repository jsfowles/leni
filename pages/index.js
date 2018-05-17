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
  DateContainer
} from './styles';
import ReactRevealText from 'react-reveal-text';
import { injectGlobal } from 'react-emotion';

injectGlobal`
  html, body {
    margin: 0;
  }
`;

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
            <Date fontSize={'150px'}>
              <ReactRevealText show={this.state.show} delayMin={0}>
                May 6th, 2018
              </ReactRevealText>
            </Date>
          </DateContainer>
          <Container>
            <IntrinsicContainer>
              <NameContainer>
                <Border>
                  <Name fontSize={'150px'}>
                    <ReactRevealText show={this.state.show} delayMin={0}>
                      Eleanor
                    </ReactRevealText>
                  </Name>
                </Border>
              </NameContainer>
            </IntrinsicContainer>
          </Container>
        </Main>
      </React.Fragment>
    );
  }
}
