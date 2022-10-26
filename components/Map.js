import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  
  // Transform the search Results into the 
  // {latitude:52.516272,longitude:13.377722}
  // object
  
  const coordinates = searchResults.map(result => ({  //Parenthesis and curly braces means it will return every time it loops trough
    longitude: result.long,
   latitude: result.lat,
}));

const center = getCenter(coordinates);

const [viewport, setViewport] = useState({
  width: "100%",
  height: "100%",
  latitude: center.latitude,
  longitude: center.longitude,
  zoom:10,
});
return (
    <ReactMapGL 
      mapStyle="mapbox://styles/shit1609/cl9o0g30m009714mecx7szk2o" 
      mapboxAccessToken={process.env.mapbox_key} 
    {...viewport}
    onMove={evt  => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => {
        <div key={result.long}>
          <Marker longitude={result.long}
           latitude={result.lat}
           offsetTop={-10} >
            <p onClick={()=>setSelectedLocation(result)} 
            className='cursor-pointer text-2xl animate-bounce' 
            aira-label='push-pin'>📌</p>
            
          </Marker>
      {/* This is the popup that'll how if we clic k the marker */}
    {selectedLocation.long === result.long ? (
      <Popup onClose={()=>setSelectedLocation({})} 
      closeOnClick={true}
      latitude={result.lat}
      longitude={result.long} >
        {result.title}
        </Popup>
    ):(false)}
    </div>
  })}
    </ReactMapGL>
    
  );
}

export default Map;