import React from 'react';
import { ProfileModel } from '../../model/ProfileModel';

interface Props extends ProfileModel { }

const profile: React.FC<Props> = (props) => {
    return ( 
        <div className="">
            <h1> Welcome {props.firstName } {props.lastName}!</h1>
            <p>Your Email: {props.email}</p>

        </div>
     );
}

export default profile;