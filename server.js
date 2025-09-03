// Code Smell 1: ตัวแปรที่ไม่ได้ใช้
let unusedVariable = "I will cause a smell";

// Code Smell 2: ฟังก์ชันที่ซับซ้อนเกินไป (Cognitive Complexity)
function complexFunction(x) {
    if (x > 0) {
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                console.log("Even:", i);
            } else {
                console.log("Odd:", i);
            }
        }
    } else if (x === 0) {
        console.log("Zero");
    } else {
        console.log("Negative");
    }
    return "Done";
}

// เรียกใช้
complexFunction(5);