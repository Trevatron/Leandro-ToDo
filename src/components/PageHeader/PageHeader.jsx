import React from 'react'
import styled from 'styled-components'

export default props => (

  <Header>
  <header className='page-header'>
    <h2>
      {props.name}
      <small> {props.small}</small>
    </h2>
  </header>
  </Header>
)

const Header = styled.header`

.page-header{
background-color: pink; 
}

`