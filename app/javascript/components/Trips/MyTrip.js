import React from 'react'
import { Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const Pic = styled.div`
    width: 50px;
    text-aligh: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img{
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;

    }
    `
const Name = styled.div`
    padding: 20px 0 10px 0;
    `
const Desc = styled.div`
    font-size: 12px;
    `
const MyLink = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px
        border: 1px solid #000;
        width 105%;
        text-decoration: none;
    }

`

//returns each of the cards for a trip
const MyTrip = (props) => {
    return(
        <Card>
            <Pic>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </Pic>
            <Name>{props.attributes.name}</Name>
            <Desc>{props.attributes.description}</Desc>
            <MyLink>
                <Link to={"/trips/"+ props.attributes.slug}>Check it out!</Link>
            </MyLink>
        </Card>
    )
}

export default MyTrip