// const accountId = 12345678
// let accounEmail = "test@gmail.com"
// var accountPassword = 876
// accountCity = "Jaipur"

// // accountId = 2
// console.log(accountCity)

/* change a to b and vice versa(i.e a = "8", b="3"), without changing the code
Do Not redeclare variables*/
function test() {
    var a = "3";
    var b = "8";

    var c = a;
    a = b;
    b =  c;
    console.log("Now a is " + a);
    console.log("b is now " + b);
}
test()