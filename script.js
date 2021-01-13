function showUI(value){
    if(value == 2){
        //substract UI
        var intxt = ['', 'Enter the no. of Days, years, months and time to substract', 'Enter the Date to calculate difference'];
        document.getElementById("valueofBox").innerHTML =intxt[value];
        document.getElementById("yr2").placeholder =  "yyyy";
        document.getElementById("mm2").placeholder =  "mm";
        document.getElementById("dd2").placeholder =  "dd";
        document.getElementById("hr2").placeholder =  "hr";
        document.getElementById("min2").placeholder =  "min";
        document.getElementById("sec2").placeholder =  "seconds";
        
        document.getElementById("resultsection").style.opacity = 0;
    }
    if(value == 0 || value == 1){
        //add UI
        document.getElementById("valueofBox").innerHTML = "Enter the number of years, months, hours, days to add";
        document.getElementById("yr2").placeholder =  "no of years";
        document.getElementById("mm2").placeholder =  "no of months";
        document.getElementById("dd2").placeholder =  "no of days";
        document.getElementById("hr2").placeholder =  "no of hours";
        document.getElementById("min2").placeholder =  "no of min";
        document.getElementById("sec2").placeholder =  "no of seconds";

        document.getElementById("resultsection").style.opacity = 1;
    }
}

function getValues(selectedIndex){
    var selection = selectedIndex;
    //starting date value
    var year1 = document.getElementById("yr1").value;
    var month1 =parseInt(document.getElementById("mm1").value);
    var day1 = document.getElementById("dd1").value;
    var hour1 = document.getElementById("hr1").value;
    var min1 = document.getElementById("min1").value;
    var sec1 = document.getElementById("sec1").value;

    month1 -= 1;
    var date1 = new Date(year1, month1, day1, hour1, min1, sec1);
    
    var year2 = document.getElementById("yr2").value;
    var month2= document.getElementById("mm2").value;
    var day2 =  document.getElementById("dd2").value;
    var hour2 = document.getElementById("hr2").value;
    var min2 =  document.getElementById("min2").value;
    var sec2 =  document.getElementById("sec2").value;
    //getting date object

    var date2 = new Date(year2, month2, day2, hour2, min2, sec2);
if(selection == 0){
    addDays(date1, year2, month2, day2, hour2, min2, sec2);
}   
else if(selection == 1){
    subDays(date1, year2, month2, day2, hour2, min2, sec2);
}
else if(selection == 2){
    //calculating difference between two days   
    calcutateDateDifference(date1, date2);
}
}


//setting the result date on html
function showDate(resultdate){
    //getting result fields
    var year3 = document.getElementById("yr3");
    var month3 = document.getElementById("mm3");
    var day3 = document.getElementById("dd3");
    var hour3 = document.getElementById("hr3");
    var min3 = document.getElementById("min3");
    var sec3 = document.getElementById("sec3");   


var datetodisplay = resultdate.toString();
var datearray = datetodisplay.split(" ");

var finalresult  = document.getElementById("finalresult");
finalresult.innerText = resultdate;
var timevalues = datearray[4];
var timearray = timevalues.split(":");

var monthunit = convertToMonth(datearray[1]);
var finalmonth = 0;
var finalday = 0;
var finalhour = 00;
var finalmin = 00; 
var finalsec = 00;
    
    finalyear =  datearray[3];
    finalmonth = monthunit;
    finalday =   datearray[2];
    finalhour =  timearray[0];
    finalmin  = timearray[1];
    finalsec =   timearray[2];
    //setting the value in result input boxes
    year3.value = finalyear;
    month3.value = finalmonth;
    day3.value = finalday;
    hour3.value = finalhour;
    min3.value = finalmin;
    sec3.value = finalsec;
}


 //function to add no. of days in the date. option 1st   
function addDays(date, yearsToAdd, monthsToAdd, daysToAdd, hoursToAdd, minutesToAdd, secondsToAdd){
date.setFullYear(date.getFullYear() + parseInt(yearsToAdd));
date.setMonth(date.getMonth() + parseInt(monthsToAdd));
date.setDate(date.getDate() + parseInt(daysToAdd));
date.setHours(date.getHours() + parseInt(hoursToAdd));
date.setMinutes(date.getMinutes() + parseInt(minutesToAdd));
date.setSeconds(date.getSeconds() + parseInt(secondsToAdd));
var result = document.getElementById("finalresult");
result.innerHTML = date.toString();
alert(date.toString());

showDate(date);
}

//function to subtract days from date
function subDays(date, yearsToAdd, monthsToAdd, daysToAdd, hoursToAdd, minutesToAdd, secondsToAdd){
date.setFullYear(date.getFullYear() - parseInt(yearsToAdd));
date.setMonth(date.getMonth() - parseInt(monthsToAdd));
date.setDate(date.getDate() - parseInt(daysToAdd));
date.setHours(date.getHours() - parseInt(hoursToAdd));
date.setMinutes(date.getMinutes() - parseInt(minutesToAdd));
date.setSeconds(date.getSeconds() - parseInt(secondsToAdd));
var result = document.getElementById("finalresult");
result.innerHTML = date.toString();
alert(date.toString());

showDate(date);
}


//calculating the time difference
function calcutateDateDifference(date1, date2){
    //defining the variables to set values
    var year3 = document.getElementById("yr3");
    var month3 = document.getElementById("mm3");
    var day3 = document.getElementById("dd3");
    var hour3 = document.getElementById("hr3");
    var min3 = document.getElementById("min3");
    var sec3 = document.getElementById("sec3");   
   
    var dateDifference  = date2.getTime() - date1.getTime();
    var newDate = new Date(dateDifference);

    //get difference of years
    var ryear = newDate.getUTCFullYear();
    var finalyear = ryear - 1970;
    
    var finalmonth = 0;
    var finalday = 0;
    var finalhour = 00;
    var finalmin = 00; 
    var finalsec = 00;

    finalmonth = newDate.getUTCMonth();
    finalday = newDate.getUTCDate() - 1;
    finalhour = newDate.getUTCHours();
    finalmin = newDate.getUTCMinutes();
    finalsec = newDate.getUTCSeconds();
    
    year3.value = finalyear;
    month3.value = finalmonth;
    day3.value = finalday;
    hour3.value = finalhour;
    min3.value = finalmin;
    sec3.value = finalsec;
}

//converting string month to number;
function convertToMonth(monthname){
   
    var monthvalue = ['Jan','Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
    var index = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(var i=0; i<12; i++){
        if(monthname == monthvalue[i]){
            return index[i];
        }
    }
}

