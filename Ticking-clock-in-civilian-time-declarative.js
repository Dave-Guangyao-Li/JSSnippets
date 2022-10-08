// functions that give us values and manage console.
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

// functions for transforming data
// takes a date object and returns an object for clock time that contains hours, minutes, seconds
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

// takes the clock time object and returns an object where hours are converted to civilian time
const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

// takes the clock time object and appends time of day(AM or PM) to it
const appendAMPM = clockTime => ({
    ...clockTime,
    ampm:clockTime.hours>=12?"PM":"AM"
});


// high-order functions for composing functions
const compose = (...fns) => arg => 
    fns.reduce((composed, f) => f(composed), arg);

// Takes a target function and returns a function that will send a time to the target. 
//In this example, the target will be console.log.
const display = target => time => target(time);

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    key: clockTime[key]<10?"0"+clockTime[key]:clockTime[key]
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime);

// Starts the clock by setting an interval 
//that invokes a callback every second.
//The callback is composed using all our functions.
//Every second the console is cleared, currentTime is obtained, converted, civilianized, formatted, and displayed
const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    );

startTicking();

// compose function
// function compose(...fns){
//     return fns.reduce((f,g) => (...args) => f(g(...args)));
// }

