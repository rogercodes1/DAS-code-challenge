// install json-server
// npm install -g json-server
//Run server
// json-server --watch daysAPI.json

const appointmentType = `http://localhost:3000/testdrive`
// let daysArray = ["Monday", "Tuesday"] //for testing

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
}



 const fetchAvailTimesByDay = async (daysArray)=> {
  return new Promise((resolve,reject)=>{
    daysArray.forEach(day=>{
      debugger;
      fetch(`${appointmentType}/${day}`)
      .then(res=>{
        console.log('res json()',res.json());
        if (res.ok){
          debugger
          res.json()
          .then(json=>{
            resolve(json)
          })
        }
        else {
          reject(console.log("what is res.json()", res.json());)
        }
      })
  })
  })

}
// console.log(fetchAvailTimesByDay(daysArray));


// After looking up a couple articles I came up with the code below.
const finalPromises = async ()=>{
  const first =  await fetchDays()
  const last = await fetchAvailTimesByDay(first)
  debugger

  console.log(first);
  console.log(last);
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
