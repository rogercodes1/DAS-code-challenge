// install json-server
// npm install -g json-server
//Run server
// json-server --watch daysAPI.json

const appointmentType = `http://localhost:3000/testdrive`
let daysArray = ["Monday", "Tuesday"] //for testing

let fetchDays = ()=>{
  return new Promise((resolve, reject) =>{
    fetch(appointmentType)
    .then(res=>{
      if (res.ok){
        res.json().then(json=>resolve(json))
      }
      else {
        reject(alert(`No times available`))
      }
    })
  })

  let response = await fetch(appointmentType)
  let data = await response.json()
  await data.forEach(day=>{

    dayObjData[day.id] = day.times
    daysArr.push(`${day.id}`)
    })
  console.log(dayObjData);
  return daysArr
}

console.log(fetchDays());

 const fetchAvailTimesByDay = (daysArray)=> {
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
          reject(alert(`No times available`))
        }
      })
  })
  })
  console.log(promise);
  return promise
}
console.log(fetchAvailTimesByDay(daysArray));


// After looking up a couple articles I came up with the code below.
const finalPromises = async ()=>{
  const first =  fetchDays()
  debugger
  const last = fetchAvailTimesByDay(first)

  console.log(await first);
  console.log(await last);
  debugger
  return allAvailTimes
}

finalPromises()





// Code attempts

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
