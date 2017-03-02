export default (store = {
    places: [1,2,3,4,7],
    selected_place: null,
    loading: false
},action) => {
        switch (action.type){
            case 'GET_PALACES': {
                return {
                    ...store,
                    loading: true
                }
            }
        }
        return store

}