// import React from 'react';
// import { Route } from 'react-router-dom';
// import history from '../history';
// class Header extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={

//         }
//     }

//     render(){
//         return(
//             <>
//                 <h1> THIS IS NAVBAR PAGE</h1>
//                 <button >click to rediret to home page </button>
//             </>
//         );
//     }
// }
// export default Header;

import React from 'react';
import { Route,useHistory, } from 'react-router-dom';
import history from '../history';


const Navbar=()=>{
    const history = useHistory()

    return(
        <>
        <h1> thus is nav bar page</h1>
        <button onClick={  () => { history.push('/homepage') }
            }>click to redirect</button>
        </>
    );
}
export default Navbar;