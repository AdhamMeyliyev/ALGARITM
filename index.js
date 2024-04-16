
//1
// let arr = ["home", "joke", "alibobo"]

// let a = arr[arr.length -1 ].length
// console.log(a);




//2
// let obj = {
//     1:"salim",
//     2:"ali",
//     10:"vali",
//     12:"vali"
// }

// let key = Object.keys(obj);
// let sum = 0;

// for(let i=0; i<key.length; i++){
//     sum += parseInt(key[i])
// }

// console.log(sum);



//3

// let input = "1.1.1"
// let output = input.replace(/\./g , "[.]")

// console.log(output);



// 4

// let n=6;

// function logarifm (n){
//     if ( n === 0 || n === 1){
//         return 1;
//     }else{
//         return n * logarifm(n-1)
//     }
// }

// console.log(logarifm(n));


// LEETCODE MASALA

// 1) 1 TWO SUM

// let nums = [2,7,11,15];
// let target = 9;

// var twoSum = function (nums, target){
//     let currentValue= {};
    
//     for(let i=0; i < nums.length; i++){
//         let value = nums[i];
//         let neededValue = target - value;
//         let index2 = currentValue[value];

//         if(index2 != null){
//             return [index2, i]
//         }else{
//             currentValue[neededValue] = i;
//         }
//     }
// }

// twoSum();

/////////////////////////////////////////////////////////////////////////////////////////

//9 / 2 PALENDROME NUMBER

// function isPalindrome(number) {
//     // Sonni stringga o'girib olamiz
//     var strNumber = number.toString();
    
//     // Sonning uzunligini aniqlaymiz
//     var length = strNumber.length;
    
//     // Sonni birinchi yarimini olish
//     for (var i = 0; i < length / 2; i++) {
//         // Har bir raqamni o'ng va chap tomonlarini solishtiramiz
//         if (strNumber[i] !== strNumber[length - 1 - i]) {
//             return false;
//         }
//     }
    
//     // Palindrom bo'lishini tekshiramiz
//     return true;
// }

// // Test uchun son
// var x = 12344321;

// // Palindromlikni tekshiramiz
// if (isPalindrome(x)) {
//     console.log(x + " - palindrom son");
// } else {
//     console.log(x + " - palindrom son emas");
// }


///////////////////////////////////////////////////////////////////////////////////////////

//13 / 3 ROMAN TO INTEGEFR

// function romanToDecimal(roman) {
//     const rimlar = {
//         'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
//     };
    
//     let son = 0;
    
//     for (let i = 0; i < roman.length; i++) {
//         const hozirgiRimRaqami = rimlar[roman[i]];
//         const keyingiRimRaqami = rimlar[roman[i + 1]];
        
//         // Agar keyingi raqam hozirgidan katta bo'lsa, hozirgi raqamni ayirib qo'yamiz
//         if (keyingiRimRaqami && hozirgiRimRaqami < keyingiRimRaqami) {
//             son -= hozirgiRimRaqami;
//         } else {
//             son += hozirgiRimRaqami;
//         }
//     }
    
//     return son;
// }

// // Test uchun Rim raqami
// const rimRaqami = "III";

// // Rim raqamini sona aylantirish
// const son = romanToDecimal(rimRaqami);

// // Natija chiqarish
// console.log(`${rimRaqami} raqami ${son} soniga aylantirildi.`);

///////////////////////////////////////////////////////////////////////////////////////////

//14 / 4 Longest Common Prefix

// function enUzunKelime(strs) {
//     if (!strs || strs.length === 0) {
//         return ""; // Massiv bo'sh yoki mavjud emas
//     }

//     let enUzun = strs[0]; // Birinchi elementni uzun element deb olamiz
//     for (let i = 1; i < strs.length; i++) {
//         if (strs[i].length > enUzun.length) {
//             enUzun = strs[i]; // Uzun elementni almashtiramiz
//         }
//     }
//     return enUzun;
// }

// // Test massivi
// const strs = ["flower", "flow", "flight", 'asajsbkbkjbk'];

// // En uzun elementni topish
// const enUzun = enUzunKelime(strs);

// // Natija
// console.log("Eng uzun so'z:", enUzun);


//21 / 5 Merge Two Sorted Lists

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function mergeTwoLists(list1, list2) {
//     const dummy = new ListNode(); // Oddiy tugun keltirilganini osonlashtirish
//     let current = dummy; // Birikmagan tugunning joriy tuguniga ko'rsatuvchi ko'rsatgich

//     while (list1 !== null && list2 !== null) {
//         if (list1.val < list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     current.next = list1 !== null ? list1 : list2;

//     return dummy.next;
// }

// // Test uchun tugunlar
// const list1 = new ListNode(1);
// list1.next = new ListNode(2);
// list1.next.next = new ListNode(4);

// const list2 = new ListNode(1);
// list2.next = new ListNode(3);
// list2.next.next = new ListNode(4);

// // Tugunlarni birlashtirish
// const mergedList = mergeTwoLists(list1, list2);

// // Tugunni chiqarish funksiyasi
// function printList(head) {
//     let current = head;
//     const result = [];
//     while (current !== null) {
//         result.push(current.val);
//         current = current.next;
//     }
//     return result.join(' -> ');
// }

// // Birlangan tugunni chiqarish
// console.log("Birlangan Tugunlar:", printList(mergedList));


