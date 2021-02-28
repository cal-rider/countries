import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  img {
    margin-right: 10px;
    height: 100px;
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }

  h1{
      font-size: 30px;
  }
`
const Description = styled.div`
  font-size: 23px;
`
const Body = styled.div`
font-size: 15px;
`


const Header = (props) => {
    const{name, image_url, description} = props.attributes
    return(
        <Wrapper>
            <h1><img src={image_url}/><br></br>{name}</h1>
            <div>
                <Description>{description}</Description>
                <Body >
                    What should go here?
                </Body>
            </div>
        </Wrapper>
    )
}

export default Header