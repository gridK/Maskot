import React from 'react';


function DateTimeToFullString(date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var date = date.getDate();
    return (month + " "+ date + ", " + year);
}

function DateTimeToFullStringRearrage(date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var date = date.getDate();
    return (date + " "+ month + " " + year);
}

function DateTimeToLocaleDateStringLeadZero(date){

    return date.toLocaleDateString("en-GB", { 
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
}



export {DateTimeToFullString, DateTimeToFullStringRearrage, DateTimeToLocaleDateStringLeadZero};