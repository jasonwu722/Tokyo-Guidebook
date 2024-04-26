var showmonth = document.getElementById('month')
var showdate = document.getElementById('date')
var showweek = document.getElementById('week')
var showtime = document.getElementById('time')

var date = new Date()
// get current date and time

var nihonnoWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
var normalWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// set an array for Japanese week days

function updateCanlendar(){

    date = new Date()

    Month = date.getMonth() + 1
    // .getMonth() will start from 0 so I need to let it plus one
    Hi = date.getDate()
    Week = date.getDay()
    Hour = date.getHours()
    Minutes = date.getMinutes()
    Seconds = date.getSeconds()

    showmonth.innerText = Month + "月"
    showdate.innerText = Hi + "日"
    showweek.innerText = normalWeek[Week]
    // the week will be update from normal week array

    showweek.addEventListener('click', function(){
        showweek.innerText = nihonnoWeek[Week]
    // when click the week text, it will display the japanese style week
    })
    showtime.innerText = alignment(Hour) + " : " + alignment(Minutes) + " : " + alignment(Seconds)
    // up date the innerText
}

function alignment(num){
    // add a 0 if the seconds and minutes are under 10, it is for being able to align
    if(num<10){
        return("0" + num)
    } else{
        return num
    }
}

updateCanlendar();

var interval = window.setInterval(updateCanlendar, 1000);
