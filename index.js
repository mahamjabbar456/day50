// Question 148
function delay() {
    setTimeout(() => {
        console.log("This message is show after 2 seconds delay.");
    }, 2000);
}
delay();
console.log("This code execute before delay function");
// Question 149
console.log("Start");
setTimeout(() => {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
// Question 150
// Synchronous example
console.log("This line execute in synchronous.");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Asynchronous example");
function Asynchronous() {
    setTimeout(() => {
        console.log("This is asynchronous example");
    }, 1000);
}
Asynchronous();
console.log("End asynchronous example");
export {};
