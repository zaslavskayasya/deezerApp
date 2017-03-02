import React , {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Place extends React.component{

    render(){
        return (
            <div style={{
                position: 'relative', color: 'white', background: 'red',
                height: 40, width: 60, top: -20, left: -30,
            }}>
                {text}
            </div>
        )
    }
}

export default Place;