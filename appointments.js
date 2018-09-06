// install json-server
// npm install -g json-server
// json-server --watch daysAPI.json

const appointmentType = `http://localhost:3000/testdrive`
let daysArray = ["Monday", "Tuesday"]

let fetchAvailableDays = async ()=>{
  let daysArr=[];
  let dayObjData = {}
  let response = await fetch(appointmentType)
  let data = await response.json()
  await data.forEach(day=>{

    dayObjData[day.id] = day.times
    daysArr.push(`${day.id}`)
    })
  console.log(dayObjData);
  return dayObjData
}

console.log(fetchAvailableDays());

 let fetchAvailTimesByDay = (daysArray)=> {
  let promise = new Promise((resolve,reject)=>{
    daysArray.forEach(day=>{
      fetch(`${appointmentType}/${day}`)
      .then(res=>{
        debugger
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
console.log(fetchAvailTimesByDay(daysArray));

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
