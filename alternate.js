// install json-server
// npm install -g json-server
//Run server
// json-server --watch daysAPI.json

const appointmentType = `http://localhost:3000/testdrive`

let fetchDays = ()=>{
  return new Promise((resolve) =>{
    fetch(appointmentType)
    .then(res=>res.json())
    .then(json=>resolve(json))
    .catch(err => {console.log('what is err',err)})
  })
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


const finalPromises = async ()=>{
  const first = await fetchDays()
  const oneDay = await fetchAvailTimesByDay(first)
  const multiDays = await fetchAllTimesByDay(first)
  console.log(first);
  console.log(oneDay);
  console.log(multiDays);
  return oneDay
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
