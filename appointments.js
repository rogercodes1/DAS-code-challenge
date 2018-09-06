const appointmentType = `http://localhost:3000/testdrive`
let daysArray = ["Monday", "Tuesday"]
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
  return dayObjData
}


 // fetchAvailableDays()
//  async function fetchAvailableTimesByDay(daysArray) {
//    let availTimes = [];
//   daysArray.forEach(day=>{
//
//        let res = await fetch(`${appointmentType}/${day}`)
//      let data = await res.json()
//        availTimes +=data.times
//
//    })
//    debugger
//  }
// fetchAvailableTimesByDay(daysArray)

 function fetchAvailTimesByDay(daysArray) {
  let promise = new Promise((resolve,reject)=>{
    daysArray.forEach(day=>{
      fetch(`${appointmentType}/${day}`)
      .then(res=>{
        if (res.ok){
          res.json()
          .then(json=>{
            resolve(json)
          })
        }
        else {
          reject(alert("No times available. "))
        }
      })
  })
  })
  console.log(promise);
  return promise
}
fetchAvailTimesByDay(daysArray)
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
