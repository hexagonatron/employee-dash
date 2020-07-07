import React from 'react';

import TableRow from './TableRow'
import SortToggle from './SortToggle';

function EmployeeTable({ employees, sortClickHandler, sortObj }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>
            Name
        <SortToggle
              field="name"
              sortClickHandler={sortClickHandler} 
              sortObj={sortObj}/>
          </th>
          <th>
            Age
        <SortToggle
              field="age"
              sortClickHandler={sortClickHandler} 
              sortObj={sortObj}/></th>
          <th className="text-right">
            Country
        <SortToggle
              field="country"
              sortClickHandler={sortClickHandler} 
              sortObj={sortObj}/>
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) => <TableRow employee={employee} key={i} />)}
      </tbody>
    </table>
  );
}

export default EmployeeTable;