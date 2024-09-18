// ---------------------------------EX 01---------------------------
// sử dụng cấu trúc if...else, viết chương trình yêu cầu người dùng nhập vào câu
// trả lời cho câu hỏi "Bạn sinh năm bao nhiêu?".
// nếu câu trả lời nhập vòa lf một số hiển thị số tuổi của người dùng,
// nếu không hiển thị giá trị không hợp lệ . 

//                            ******************

// let year = +prompt("Bạn sinh năm bạn nhiêu?");
// let sum = 2024 - year;

// if (!isNaN(year) && year){
// console.log(sum + "Tuổi");
// }else{
//     console.log("Năm sinh không hợp lệ");  
// }


//--------------------------------- EX 02 ---------------------------
// Viết chương trình yêu cầu người dùng nhập vòa số bất kỳ. 
// tiến hành kiểm tra số nhập vào in ra theo 3 trường hợp: số chẵn, số lẻ, và không hợp lệ

//                             ********************

// let number = +prompt("Mời nhập vòa số n");

// if(isNaN(number)){
//     console.log("Số không hợp lệ. nhập lại");
// }else if(number % 2 === 0){
//     console.log(number + ":Số chẵn");
// }else{
//     console.log(number + ":Số lẻ");
// }


// ---------------------------------EX 03----------------------------
// Viết chương trình yêu cầu nhập vào số hiển thị ngày trong tuần
// tương ứng với số vừa nhập. khi người dùng nhập 2 thì hiển thị là Monday, 
// 3 thì hiển thi là Tuesday ... 8 thì hiển thị là Sunday, 
// bất kỳ giá trị nào khác thì hiển thị là không hợp lệ.

//                               *************

// let day = +prompt("Nhập vào thứ trong tuần");
// switch (day) {
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     case 8:
//         console.log("Sun day");
//     default:
//         console.log("Không hợp lệ");       
// }

// ------------------------------EX 04------------------------------
// Viết trương trình yêu cầu nhập vào một số, sử dung toán tử 3 ngôi
// để hiển thị số đó là âm hay dương.
//                           ***********

// let n = +prompt("Nhập vào một số n");
// if(n > 0){
//     console.log(n + ":Số dương");   
// }else if(n < 0){
//     console.log(n + ":Số âm");  
// }else{
//     console.log("Không hợp lệ"); 
// }

// -------------------------------EX 05-----------------------------
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên bất kỳ,
// in ra các số nguyên dương từ 1 đến số vừa nhập lên màn hình console.
//                           *****************

// let number;
// do{
//     number = +prompt("Nhập số nguyên dương");
// }while (isNaN(number) || number <= 0);
//     console.log('các số nguyên dương từ 1 đế ${number} là:');
// for (let i = 1; i <= number; i = i + 1){
//     console.log(i);
// }
    
// // ----------------------------------EX 06-----------------------------
// viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kỳ
// tính toán giao thừa của số vừa nhập và in ra màn hình console.
// 
// ;                                  ************

// let number = +prompt("Nhập vòa số nguyên dương từ 1- 100");
// let factorial = 1;
// for(let i = 1; i <= number; i = i + 1){
//     factorial *= i;
// }
//    console.log("Giai thừa của" + number +"là"+ factorial );

// } tại sao khi cho log vòa trong vòng lặp thì in ra nhiều mà cho log ra ngoài 
// vòng lặp thì in ra ít.

// -------------------------------------EX 07-----------------------------
//Viết chương trình hiển thị các số 1-100 lên màn hình console. nếu số đó chia hết cho 3
// thì hiển thị "Fizz", nếu số đó chia hết cho 5 thì hiển thi là "Buzz".Nếu số 
// đó chia hết cho cả 3 và 5 thì hiển thị là "FizzBuzz"
//                                   ************ 


// let i = +prompt("Nhập vào số từ 1 - 100");

// for ( let i = 1; i <= 100; i = i + 1){
// if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
// }else if(i % 3 === 0){
//     console.log("Fizz");  
// }else if(i % 5 === 0){
//     console.log(i + ":Buzz");
// }else{
//     console.log("Giá trị nhập không hơp lệ");   
// }
// }

// ------------------------------------EX 08--------------------------------
// Viết chương trình yêu cầu nhập vào 2 số nguyên dương a và b,
// in ra các số chia hết cho b trong khoảng từ 1 đến a lên màn hình console.
//                                   ***********

// let numberA = +prompt("Nhập vào số nguyên dương a");
// let numberB = +prompt("Nhập vào số nguyên dương b");

// if (numberA > 0 && numberB > 0){
//     console.log("các số chia hết cho" + numberB + "trong khoảng từ 1 đến" + numberA + "là:");
//  for (let i = 1; i <= numberA; i = i + 1){
//    if (i % numberB === 0){
//     console.log(i); 
//     }  
// }   
// }else{
//     console.log("Nhập lại số nguyên dương");
// }




