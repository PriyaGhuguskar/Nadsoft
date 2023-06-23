
let emailSent = document.getElementById('email-sent')
let emailrec = document.getElementById('email-rec')
let emailunreacd = document.getElementById('email-unread')

let smsSent = document.getElementById('sms-sent')
let smsrec = document.getElementById('sms-rec')
let smsunreacd = document.getElementById('sms-unread')

let callSent = document.getElementById('call-sent')
let callrec = document.getElementById('call-rec')
let callunreacd = document.getElementById('call-unread')

let DayClick = document.getElementById('DayClick')
let weekClick = document.getElementById('WeekClick')
let week2Click = document.getElementById('week2Click')
let monthClick = document.getElementById('monthclick')


DayClick.addEventListener('click', day)
weekClick.addEventListener('click', week)
week2Click.addEventListener('click', weektwo)
monthClick.addEventListener('click', month)


function day() {

    emailSent.innerText = '160'
    emailrec.innerText = '75'
    emailunreacd.innerText = '5'

    smsSent.innerText = '300'
    smsrec.innerText = '99'
    smsunreacd.innerText = '12'

    callSent.innerText = '1000'
    callrec.innerText = '499'
    callunreacd.innerText = '12'

}
function week() {
    emailSent.innerText = '230'
    emailrec.innerText = '135'
    emailunreacd.innerText = '12'

    smsSent.innerText = '340'
    smsrec.innerText = '123'
    smsunreacd.innerText = '22'

    callSent.innerText = '1670'
    callrec.innerText = '679'
    callunreacd.innerText = '32'
}
function weektwo() {
    emailSent.innerText = '540'
    emailrec.innerText = '315'
    emailunreacd.innerText = '21'

    smsSent.innerText = '430'
    smsrec.innerText = '313'
    smsunreacd.innerText = '42'

    callSent.innerText = '1790'
    callrec.innerText = '739'
    callunreacd.innerText = '52'
}
function month() {
    emailSent.innerText = '670'
    emailrec.innerText = '455'
    emailunreacd.innerText = '51'

    smsSent.innerText = '560'
    smsrec.innerText = '493'
    smsunreacd.innerText = '72'

    callSent.innerText = '2490'
    callrec.innerText = '949'
    callunreacd.innerText = '72'
}