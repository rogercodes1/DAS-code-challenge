const appointmentType = `http://localhost:3000/testdrive`

async function fetchAvailableDays() {
  let daysArr=[];
  let dayObjData = {}
  let response = await fetch(appointmentType)
  let data = await response.json()
  await data.forEach(day=>{
    // debugger
    dayObjData[day.id] = day.times
    daysArr.push(`${day.id}`)
    })
    // return daysArr
  debugger
}
// function fetchAvailableTimesByDay(daysArr) {
//   debugger;
//   daysArr.forEach(day=>{
//     debugger;
//     fetch(`${appointmentType}/${day}`)
//   })
// }
 fetchAvailableDays()
// fetchAvailableTimesByDay()
// async function run(){
//   let availableTimes;
//   let arr = await fetchAvailableDays()
//   await arr.forEach(day=>{
//     let resp = await fetch(`${appointmentType}/${day}`)
//     // debugger;
//     let data = await resp.json()
//     // .then(json=>{
//     //   // debugger
//     //   availableTimes.push(json.times)
//     // })
//
//
//   })
//   debugger
// }

// run()
