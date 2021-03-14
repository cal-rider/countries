import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import LocationForm from './LocationForm'
import Location from './Location'
import SearchForm from './SearchForm'
import styled from 'styled-components'

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

const Trip = (props) => {
    const [trip, setTrip] = useState ({})
    const [location, setLocation] = useState({})
    const [selection, setSelection] = useState()
    const[loaded, setLoaded] = useState(false)

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

    useEffect(()=>{
        
        const url = `https://restcountries.eu/rest/v2/all`

        axios.get(url)
        .then( resp => {
            //need to call set location to current selection
            console.log(resp)
        })
        .catch( resp => console.log(resp))
    }, [selection])

const handleChange = (e) => {
    e.preventDefault()
    
    setLocation(Object.assign({},location,{[e.target.name]: e.target.value}))
    
    console.log('name', location)
}

const handleSubmit = (e) => {
    e.preventDefault()
    
    location.Trip_id = trip.data.id
    
    axios.post('/api/v1/locations', {location})
    .then(resp => {

        // Look into using the spread operator below to add Trip id to location like above, i think this is better syntax!!
      const included =[...trip.included, resp.data.data]
      setTrip({...trip,included})
      setLocation({name: '', description:''})
    })
    .catch(resp => {})

    
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
                <SearchForm/>

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




