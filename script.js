// // // IF PRACTICE

// // let age = 18 
// // let text = "You can not drive";
// // if(age => 18)
// // {
// //     text = "you can drive"
// // }
// // console.log (text)

// // let age2 = 16;
// // let country = "USA"
// // if (country == "USA")
// // {
// // if(age >= 16)
// // {
// //     console.log("YOU CAN DRIVE")
// // }
// // }

// // let age3 = 20
// // let country2 = "USA"
// // if(country == "USA" && age3 == 20){
// //     text = "you can drive anywhere"
// //     console.log (text)
// // }

// // // IF ELSE PRACTICE
// // let hour = 20
// // if(hour >= 18)
// // {
// //     console.log (" Busy day")
// // }
// // else{
// //     console.log(" good day")
// // }


// // var time = prompt("Enter time:");

// // if (time < 10) {
// //   greeting = "Good morning";
// // } else if (time < 20) {
// //   greeting = "Good day";
// // } else {
// //   greeting = "Good evening";
// // }

// // console.log(greeting);



// // The Conditional (Ternary) Operator
// // let age5 = 10;
// // let text5  = (age5 < 5) ? "Minor" : "Adult"
// // console.log(text5)

// // JavaScript Switch Statement

// // let day = 3
// // switch ( day ){
// //    case 1:
// //         console.log("Monday");
// //         break;
// //    case 2:
// //     console.log("Tuesday")
// //     break
// //     default :
// //     console.log ("Invalid day")

// // }
// let a = 10
// let days = 20
// switch(days){
//     case 10:
//         if(a > days)
//             console.log("good")
//         break;
//         case 20:
//             if(a = days)
//             console.log ("bad")
//         break;
//         default:
//                     console.log("Average")
// }
function checkAge() {
    // Get the value from input
    let age = document.getElementById("ageInput").value;
    age = Number(age); // convert string to number

    let message = "";

    // IF / ELSE logic
    if (age < 18) {
        message = "You are a minor";
    } else if (age >= 18 && age < 60) {
        message = "You are an adult";
    } else {
        message = "You are a senior";
    }

    // Show message on page
    document.getElementById("output").innerText = message;
}
