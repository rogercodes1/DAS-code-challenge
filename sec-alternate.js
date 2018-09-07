// install json-server
// npm install -g json-server
//Run server
// json-server --watch daysAPI.json

const appointmentType = `http://localhost:3000/testdrive`

let fetchDays = ()=>{
  let daysArray = []
  fetch(appointmentType)
  .then(res=>res.json())
  .then(json=>{
    json.map(day=>{
      daysArray.push(day.id)
    })
  })
  return daysArray
}

 const fetchAvailTimesByDay = (day)=> {
  return new Promise((resolve,reject)=>{
      fetch(`${appointmentType}/${day[0].id}`)
      .then(res=>{
        if (res.ok){
          res.json()
          .then(json=>{resolve(json.times)})
        }
        else {
          reject(console.log("what is res.json()", res))
        }
      })
  })
  }


const finalPromises = ()=>{
  Promise.all([fetchDays(), fetchAllTimesByDay(fetchDays())])
  .then(values=>{
    debugger
  })
  
}

const fetchAllTimesByDay = async(days)=> {
  console.log(days);
  let daysArr = []
 return days.forEach(day=>{
   fetch(`${appointmentType}/${day.id}`)
   .then(res=>{
     if (res.ok){
       res.json()
       .then(json=>{daysArr.push(json.times)})
     }
     else {
       console.log("what is res.json()", res)
     }
   })
   return daysArr
   })
 }

console.log(finalPromises());
