import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import DirectoryControls from './DirectoryControls'
import EmployeeTable from './EmployeeTable'

const Directory = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api?results=50').then(res => res.json()).then(json => {
            console.log(json)
            setEmployees(json.results);
        })


    }, []);



    return (
        <div className="container">
            <DirectoryControls />
            <EmployeeTable employees={employees}/>
        </div>
    );
};

export default Directory;