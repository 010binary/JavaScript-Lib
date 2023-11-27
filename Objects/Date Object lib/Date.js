// Creating a new Date object
let currentDate = new Date();

// 1. getFullYear(): Get the current year
let currentYear = currentDate.getFullYear();
console.log('Current year:', currentYear);

// 2. getMonth(): Get the current month (0-indexed)
let currentMonth = currentDate.getMonth();
console.log('Current month:', currentMonth);

// 3. getDate(): Get the current day of the month
let currentDay = currentDate.getDate();
console.log('Current day:', currentDay);

// 4. getHours(): Get the current hour
let currentHour = currentDate.getHours();
console.log('Current hour:', currentHour);

// 5. getMinutes(): Get the current minute
let currentMinute = currentDate.getMinutes();
console.log('Current minute:', currentMinute);

// 6. getSeconds(): Get the current second
let currentSecond = currentDate.getSeconds();
console.log('Current second:', currentSecond);

// 7. getMilliseconds(): Get the current millisecond
let currentMillisecond = currentDate.getMilliseconds();
console.log('Current millisecond:', currentMillisecond);

// 8. getTime(): Get the number of milliseconds since January 1, 1970
let timeInMillis = currentDate.getTime();
console.log('Milliseconds since Jan 1, 1970:', timeInMillis);

// 9. toDateString(): Get the date in a human-readable string format
let dateString = currentDate.toDateString();
console.log('Date in a readable format:', dateString);

// 10. toISOString(): Get the date in ISO format (UTC time)
let isoString = currentDate.toISOString();
console.log('ISO format (UTC):', isoString);
