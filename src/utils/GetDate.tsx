 
const day: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d: Date = new Date();
 
let hr: number = d.getHours();
let min: number | string = d.getMinutes();


if (min < 10) {
    min = "0" + min;
}

let ampm = "am";

if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}

export const currentDay = day[d.getDay()];
export const currentMonth = month[d.getMonth()];
export const currentDate = d.getDate();
export const currentYear = d.getFullYear();
export const currentTime = `${hr}:${min}${ampm}`;
