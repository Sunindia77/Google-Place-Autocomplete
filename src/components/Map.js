import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, Autocomplete, Marker } from '@react-google-maps/api';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { setCurrentPlace, addSearchHistory } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Map = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);

  const handlePlaceChange = (place) => {
    dispatch(setCurrentPlace(place));
    dispatch(addSearchHistory(place));
  };

  const handleMarkerClick = (props, marker) => {
    console.log(props, marker);
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={{ position: 'relative' }}>
      <GoogleMap
        google={window.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
        onClick={handleMarkerClick}
      >
        {place && (
          <Marker
            title={place.name}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }}
          />
        )}
        <Autocomplete
          apiKey={config.googleMapsApiKey}
          style={{
            width: '100%',
            height: '40px',
            paddingLeft: '16px',
            marginTop: '10px',
            marginBottom: '500px',
          }}
          onPlaceChanged={() => handlePlaceChange(this.autocomplete.getPlace())}
          ref={(ref) => (this.autocomplete = ref)}
          placeholder="Enter a location"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter a location"
              variant="outlined"
              fullWidth
              className={classes.root}
            />
          )}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;