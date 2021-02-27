import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import MyTrip from './MyTrip'
import styled from 'styled-components'

const Parent = styled.div`
    text-align: center;
    max-width:1200px;
    margin-left: auto;
    margin-right: auto;    
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1{
        font-size:42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
//Look into better grid design

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    width: 100%
    padding: 20px

`


const Trips = () => {
 const [trips, setTrips] = useState([])

 useEffect(()=> {
    axios.get('/api/v1/trips.json')
    .then( resp => {
        setTrips(resp.data.data)
    })
    .catch( resp => console.log(resp))
    }, [trips.length])


  

    const grid = trips.map( item => {
        return (
            <MyTrip
            key={item.attributes.name}
            attributes={item.attributes}
            />
        )
    })

    return (

    <Parent>
            <Header>
                <h1>My Trips</h1>
                <Subheader> Who wants to go on a trip?</Subheader>
            </Header>
        <Grid> 
            {grid}
        </Grid>
    </Parent>


    )
}

export default Trips;
