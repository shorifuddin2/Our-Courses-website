import React, { useEffect, useState } from 'react';

const useUsers = (url) => {

    const [users, setUsers] = useState([]);
 
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(Data => setUsers(Data))
    }, []);



    return users;
        
};

export default useUsers;