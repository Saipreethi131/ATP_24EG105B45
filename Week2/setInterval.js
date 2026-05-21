/*2.OTP Countdown Simulator (Console App)
------------------------------------
        Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends */

console.log("OTP sent Succesfully")
let seconds=10;
let intervalId = setInterval(()=>{
    seconds--;
    console.log(`Can Resend OTP in ${seconds}`)
    if(seconds===1)
    {
        console.log("Resend Otp");
        clearInterval(intervalId)
    }
},1000);
