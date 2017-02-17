import React from 'react';
import API from '../services/API';

class Main extends React.Component {
    componentDidMount(){
        API.getDezer()
    }


 render(){
     return(
         <div>qqqq</div>
     )
 }
}

export default Main




