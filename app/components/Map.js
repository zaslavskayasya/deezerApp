import React , {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const Place = ({ text }) => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 30, width: 30, top: -20, left: -30,
    }}>
        {text}
    </div>
);

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {lat: 46.28, lng: 30.43},
        zoom: 10
    };
    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <Place
                    lat={46.28}
                    lng={30.43}
                    text={'1'}
                />
                <Place
                    lat={46.48}
                    lng={30.53}
                    text={'2'}
                />
            </GoogleMapReact>
        );
    }
}

export default SimpleMap