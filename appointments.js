const appointmentType = `http://localhost:3000/testdrive`
const exactDay = `${appointmentType}/monday`

function fetchAvailableDays() {
  let daysArr=[];
  fetch(appointmentType)
  .then(response=>response.json())
  .then(json=>{
    json.forEach(day=>{
      // debugger
      daysArr.push(`${day.id}`)
    })
    return daysArr
  })

}
function fetchAvailableTimesByDay(days) {
  days.forEach(day=>{
    debugger;
    fetch(`${appointmentType}/${day.toLowerCase()}`)
  })
}
 fetchAvailableDays()
// fetchAvailableTimesByDay()
