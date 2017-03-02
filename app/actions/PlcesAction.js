
import PlacesApi from './PlasesAPI'

export function getPlaces(){
    return(dispatch)=> {
        dispatch({
            type: 'GET_PALACES'
        });
       PlacesApi.getPlaces().then((data)=> {
             dispatch({
                type:'GET_PLACES_DONE',
                 places: data.results
            })
         })
    }
}