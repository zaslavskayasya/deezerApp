import React from 'react'
import {connect} from 'react-redux'
import PlacesAPI from '../actions/PlasesAPI'

import {getPlaces} from './../actions/PlcesAction'

@connect((store)=>{
    return{
        places: store.places
    }
})
class Places extends React.Component{

    componentDidMount() {
        PlacesAPI.getPlaces();
        this.props.dispatch(getPlaces())
    }
    render(){
        console.log(this.props)
        return(
            <div className="leftBlock"> {
                this.props.places.places.map((place) => {
                    return <p className="placeItem"> {place} </p>
                })
            }</div>
        )
    }
}

export default Places;
