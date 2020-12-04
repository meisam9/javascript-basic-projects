const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway=document.querySelector('.giveaway')
const deadline=document.querySelector('.deadline')
const items=document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


// const futureDate=new Date(2021, 0, 15, 10, 5, 0)

const year=futureDate.getFullYear()
let month=futureDate.getMonth()
month=months[month]
const day=futureDate.getDate()
const weekday=weekdays[futureDate.getDay()]
const hours=futureDate.getHours()
const minutes=futureDate.getMinutes()
giveaway.textContent=`giveaway end on ${weekday}, ${day} ${month} ${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}am`

function getRemainingTime(){
  const today=new Date().getTime()
  const t= futureDate- today
  
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // values in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinutes = 60*1000
  //calculate all values
  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinutes)
  let seconds = Math.floor((t % oneMinutes) / 1000)
  
  // set values to array
  const values=[days, hours, minutes, seconds]

  function format(item){
    if(item < 10){
      return (item = `0${item}`)
    }
    return item
  }
  items.forEach((item, index)=>{
    item.innerHTML=format(values[index])
  })
  document.title=`${values[0]}Days, ${values[1]}Hours, ${values[2]}Minutes, ${values[3]}Seconds`

  if(t < 0){
    clearInterval(coundown)
    deadline.innerHTML=`<h4 class="expired"> Sorry this giveaway has expired </h4>`
    document.title="Sorry this giveaway has expired"
  }
}
let coundown=setInterval(getRemainingTime, 1000)
getRemainingTime()