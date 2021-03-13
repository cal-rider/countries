import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 10px;
    margin: 0 10px 10px 0;
`
const Title = styled.div`
    padding: 10px 0 0 0;
    font-size: 18px;
`
const Description = styled.div`
    padding: 20px 0 0 0;
    font-size: 12px;
`


const Location = (props) => {
    

    const {name, description} = props.attributes
    

    return(
        <Card>
            <Title>{name}</Title>
            <Description>{description}</Description>
            
        </Card>
    )

}

export default Location