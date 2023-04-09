var i =function(){
    document.getElementById("india").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'Asia/Kolkata',timeStyle:'medium'});
}
i();
setInterval(i,1000)

var l =function(){
    document.getElementById("london").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'Europe/London',timeStyle:'medium'});
}
l();
setInterval(l,1000)

var n =function(){
    document.getElementById("newyork").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'America/New_york',timeStyle:'medium'});
}
n();
setInterval(n,1000)

var a =function(){
    document.getElementById("sydney").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'Australia/Sydney',timeStyle:'medium'});
}
a();
setInterval(a,1000)

var ac =function(){
    document.getElementById("la").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'America/Los_angeles',timeStyle:'medium'});
}
ac();
setInterval(ac,1000)

var t =function(){
    document.getElementById("tokyo").innerHTML =new Date().toLocaleString("en-US",
   {timeZone:'Asia/Tokyo',timeStyle:'medium'});
}
t();
setInterval(t,1000)
