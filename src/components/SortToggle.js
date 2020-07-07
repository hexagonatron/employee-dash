import React from 'react';

const SortToggle = ({field, sortClickHandler, sortObj}) => {

    //logic to apply the correct classname and thus the correct sort icon
    const sortClass = 
        sortObj.field !== field?
            "fa fa-sort":
                sortObj.order === "asc"?
                "fa fa-sort-up":
                "fa fa-sort-down";

    return (
        <i className={sortClass} aria-hidden="true" onClick={sortClickHandler} data-field={field} style={{cursor:"pointer"}}></i>
    );
};

export default SortToggle;