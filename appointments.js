const appointmentType = `localhost:3000/test%20drive`
const exactDay = `localhost:8001/test%20drive/monday`
let days;

function fetchAvailableDays() {
  fetch(daysAvailable)
  .then(res=>res.json())
  .then(json=>{
    debugger
    return (days = json)
  })
}
function fetchAvailableTimesByDay(days) {

}
