import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({user ,children}) => {

        console.log(user);
    const {name, id} = user || {};
    const {email, phone}= children || {};

    return (
        <div className='col-4 gy-4'>
           <div className="card shadow-lg p-3 mb-4 bg-body rounded-3">
        <div className="card-body">
            <h4 className="card-title">Name : {name}</h4>
            <h5 className="card-subtitle mb-2 text-muted">ID: {id} </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h6 >{email}</h6>
            <h6 >{phone}</h6>

            <Link to={`/user/${id}`} className="card-link">User Info</Link>
        </div>
     </div>
    </div>
    );
};

export default SingleUsers;