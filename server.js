// 1. ใช้ let แทน const (Code Smell)
let port = 3000;

// 2. ฟังก์ชันที่ซ้ำซ้อนและไม่มีความหมาย (Code Smell)
function uselessFunction() {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        result += i;
    }
    return result;
}

// เรียกใช้ฟังก์ชันโดยไม่จำเป็น
uselessFunction();

// 3. ตัวแปรที่ไม่ได้ใช้ (Code Smell)
let unusedVariable = "I am not used anywhere";

// 4. เงื่อนไขที่ไม่มีประโยชน์ (Bug หรือ Logic Smell)
if (true) {
    console.log("This always runs");
}