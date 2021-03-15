import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import LocationForm from './LocationForm'
import Location from './Location'
import styled from 'styled-components'
import Selection from './Selection'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`
const Main = styled.div`
    padding-left: 50px;
`
const Headline = styled.div`
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    text-align: center;

`
const Trip = (props) => {
    const [trip, setTrip] = useState ({})
    const [location, setLocation] = useState({})
    const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/trips/${slug}`

        axios.get(url)
        .then( resp => {
            setTrip(resp.data) 
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    }, [])

    

const handleChange = (e) => {
    e.preventDefault()
    
    setLocation(Object.assign({},location,{[e.target.name]: e.target.value}))
    
    console.log('location', location)
}

const handleSubmit = (e) => {
    e.preventDefault()
    
    location.Trip_id = trip.data.id
    console.log(location)
    axios.post('/api/v1/locations', {location})
    .then(resp => {

        const included =[...trip.included, resp.data.data]
      setTrip({...trip,included})
      setLocation({name: '', description:''})
    })
    .catch(resp => {})

    
}

const handleSelect = (e) => {

    //Why is updating the state of the location not working as it should with the hook?
    //this is what is causing that very ugly error
   // setLocation(Object.assign({},location,{[e.target.name]: e.target.value}))
    location.name = e.name

    //console.log(e.name)
}


//Add all of the existing locations they are called in the trip.included above

let locations
if (loaded && trip.included) {
     locations = trip.included.map( (item, index) => {
       
         
        return (
        <Location
            key = {index}
            attributes = {item.attributes}
        />
        )
    })
}


    return  (
    <Wrapper>
        {
            loaded && 
            <Fragment>
                <Column>
                    <Main>
                        <Header attributes={trip.data.attributes}/>
                    {locations}
                    </Main>
                </Column>
                
                <Column>
                <Headline>Add a country to your trip?</Headline>
                <Selection
                handleChange={handleSelect}
                />

                    <LocationForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        attributes={trip.data.attributes}
                        location={location}
                    />
                  
                </Column>
            </Fragment>
         }  
        </Wrapper>
    )
    
}
export default Trip;




