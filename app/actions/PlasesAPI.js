import axios from 'axios';

var config = { headers: { 'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': 'http://localhost:63342, http://localhost:63342/Dezer%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F/index.html?_ijt=e285ln3ordfv52jtuibmr9d07s',
    'Content-Type': 'application/json' }, crossDomain: true} ;
let PlacesAPI = {
    getPlaces: function () {
        return new Promise(function (resolve, reject) {
           axios.get( 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.475833,30.751944&radius=20000&types=library&lang=ru&key=AIzaSyAc0iRgrOXhejzd_egRp8wDGM5H1re6psQ&callback'

            ).then(function (data) {
                resolve(data);
                console.log(data);
            })
        })
    }
}



export default PlacesAPI;