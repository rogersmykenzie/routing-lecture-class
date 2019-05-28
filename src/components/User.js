import React from 'react';
import {Route} from 'react-router-dom';
import Name from './Name';
import Age from './Age'

const User = props => {
    console.log(props)
    return(
        <div>
            <Route path={props.match.path + '/name'} component={Name} />
            <Route path={props.match.path + '/age'} component={Age}/>
        </div>
    )
}

export default User