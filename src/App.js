import React, { Component } from "react";
import { Main, Header, Section, Card, Title, Content } from "./styles";

class App extends Component {
  render() {
    return (
      <Main>
        <Header>
          <Title>Lucid Syncing Demo</Title>
        </Header>
        <Section>
          <Card>
            <Content />
          </Card>
          <Card>
            <Content />
          </Card>
          <Card>
            <Content />
          </Card>
        </Section>
      </Main>
    );
  }
}

export default App;
