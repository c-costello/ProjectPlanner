import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Account } from './account/Account';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
            <NavMenu />
            <Account />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
