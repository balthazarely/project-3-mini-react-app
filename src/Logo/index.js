import React from 'react'
import { Header, Icon } from 'semantic-ui-react';
import '../App.css';


const Logo = () => (
  <div className="logo">
  <Header as='h2'>
    <Icon name='archive' />
 
    <Header.Content>Employee Database</Header.Content>
  </Header>
  </div>
)

export default Logo




