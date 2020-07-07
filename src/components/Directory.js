import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import DirectoryControls from './DirectoryControls'
import EmployeeTable from './EmployeeTable'

const Directory = () => {

    const [employees, setEmployees] = useState([]);
    const [sortObj, updateSort] = useState({field: "name", order: "asc"});
    const [filterObj, updateFilter] = useState({name:""});
    const [filteredEmployees, updateFilteredEmployees] = useState([]);

    //Get some random employees on page load
    useEffect(() => {
        fetch('https://randomuser.me/api?results=50').then(res => res.json()).then(json => {
            console.log(json)
            setEmployees(json.results);
        })
    }, []);


    //Update filtered employees whenever something changes
    useEffect(() => {
        
        let newEmployees = [...employees]

        //apply filters
        if(newEmployees.length && filterObj.name){
            newEmployees = newEmployees.filter(employee => {
                return (`${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`.includes(filterObj.name.toLowerCase()));
            })
        }

        //sort functions based on different sort fields
        const sortFunctions = {
            name: (a,b) => {
                const aName =`${a.name.first} ${a.name.last}`.toLowerCase();

                const bName =`${b.name.first} ${b.name.last}`.toLowerCase();

                return aName < bName? -1 : aName > bName? 1 : 0;
            },
            age: (a,b) => {
                return a.dob.age - b.dob.age
            },
            country: (a,b) => {
                return a.location.country < b.location.country? -1 : a.location.country > b.location.country? 1: 0
            }
        }

        //apply sorting
        if(newEmployees.length && sortObj){
            newEmployees = newEmployees.sort((a, b) => {
                //get output from sort function
                let sortVal = sortFunctions[sortObj.field](a, b)

                //if using reverse sort then reverse value
                sortVal = sortObj.order === "dsc"? sortVal*-1: sortVal

                return sortVal
            })
        }

        updateFilteredEmployees(newEmployees);
    }, [employees, sortObj, filterObj])


    const sortClickHandler = (e) => {
        const field = e.target.dataset.field

        console.log(field)

        if(sortObj.field === field){
            if(sortObj.order === "asc"){
                updateSort({field: field, order: "dsc"})
            } else {
                updateSort({field: field, order: "asc"})
            }
        } else {
            updateSort({field: field, order: "asc"});
        }
    }


    return (
        <div className="container">
            <div className="content">
            <DirectoryControls updateFilter={updateFilter}/>
            <EmployeeTable employees={filteredEmployees} sortClickHandler={sortClickHandler} sortObj={sortObj}/>
            </div>
        </div>
    );
};

export default Directory;