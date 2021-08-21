import React, { Component } from 'react'
import { Button, Wrapper } from './style'

export default class App extends Component {
  render() {
    return (<Wrapper>
      <Button type="large">large</Button>
      {/* <Button type="medium">medium</Button> */}
      <Button type="little">little</Button>
    </Wrapper>
    )

      
    
  }
}
