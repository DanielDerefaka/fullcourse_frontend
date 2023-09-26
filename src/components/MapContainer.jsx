import React from 'react'
import { useLocation } from 'react-router-dom';
// import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'

// const center = {lat: 20, lng: 45}


const MapContainer = () => {
  const location = useLocation();

const lat = location.state.lat;
const lng = location.state.lng;
const title = location.state.title;
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // })
    // if(!isLoaded){
    //     return(
    //         console.log('Failed')
    //     )
    // }
  return (
    <div style={{display: 'block', margin: 'auto'}} >
        <div className="py-4">
          <h3 className='text-center text-success'> {title} on Map</h3>
        </div>
        <iframe 
        src={`https://www.bing.com/maps/embed?h=400&w=500&cp=${lng}~${lat}&lvl=11&typ=s&sty=h&src=SHELL&FORM=MBEDV8`} 
        
        frameborder="0" 
        width="500px" 
        height="400px"
        title="Property Location"
        style={{display: 'block', margin: 'auto'}}
        className="shadow rounded"
        />
        {/* <GoogleMap
     center={center}
     zoom={10}
     mapContainerStyle={{width: '100%', height: '100%'}}
     >

     </GoogleMap> */}
    </div>
     
  )
}

export default MapContainer