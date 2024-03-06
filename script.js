// 1 uy ishi
let numbers = [];

while (true) {

    let user = prompt("istalgancha son kiriting va eng kattasini chiqarib beramiz.\nSTOP deb yozing tuxtatish uchun");

    if (user.toLowerCase() === 'stop') {
        break;
    }

    if (!isNaN(user)) {
        numbers.push(user);
    } else {
        alert("Komandani to'g'ri kiriting");
    }
} 

numbers.sort((a, b) => b - a);

console.log("Kiritilgan sonlar", numbers);
console.log("Ikkta eng katta sonlar", numbers.slice(0, 2));






// 2 uy ishi

let num = prompt("! sonini kiriting o'chirib beramiz");
let user = "!".repeat(num);

console.log(`Hi${user}`);

let a = prompt("Nechta ! uchirmoqchisiz");
let result = user.slice(0, -a);

console.log(`Hi${result}`);