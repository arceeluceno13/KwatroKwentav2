import React from "react";

var DateTime =() => {
    var showdate = new Date();
    return (
        <div className="text-white text-xs lg:text-sm">
            <p>{showdate.toLocaleString('default', { month: 'long' })} {showdate.getDate()} {showdate.getFullYear()}</p>
        </div>
    );
}

export default DateTime;