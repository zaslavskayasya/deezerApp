import React , {Component} from 'react';


class Place extends React.Component{

    render(){
        return (
            <div >
                {this.props.places}
            </div>
        )
    }
}

export default Place;