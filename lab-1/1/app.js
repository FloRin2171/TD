console.log("Primul exercitiiul")

document.getElementById ('message' ).innerHTML = ' Hey ';
console.log('Salut');
var user = {
id:11 , name: "Florin" , age: 25,
};
console.log(user.name,"id=", user.id,"age=", user.age);

console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);


function print(message){
console.log(message);
}

print('td');

var password = "0000";
console.log(password=="00000"?"ALLOW":"DENY");

if(password =="0000"){
console.log("permission accepted");
} else {
console.log("permission denied");
}

$("#message1").html("finalizare");