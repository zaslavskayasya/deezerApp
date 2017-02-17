import React from 'react'
import axios from 'axios'

let API = {
    getDezer: function () {
        return new Promise (function (resolve, reject) {
            axios.get('http://api.deezer.com/artist/27'
            ).then(function(data){
                resolve(data);
                alert(data);
            })
        })
    }
};
export default API;