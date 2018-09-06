const appointmentType = `http://localhost:3000/testdrive`
const exactDay = `${appointmentType}/monday`
let days;

function fetchAvailableDays() {
  fetch(appointmentType)
  .then(response=>response.json())
  .then(json=>{
    debugger
    return (days = json)
  })
}
function fetchAvailableTimesByDay(days) {
  days.forEach(day=>{
    debugger;
    fetch(`${appointmentType}/${day.toLowerCase()}`)
  })
}
 fetchAvailableDays()
