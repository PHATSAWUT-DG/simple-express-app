// 🚨 Code Smell 1: ตัวแปรที่ไม่ได้ใช้งาน (Unused variable)
let unusedVariable = "I am never used";

// 🚨 Code Smell 2: ใช้ var แทน let/const (ใช้ var ใน ES6+ ไม่แนะนำ)
var oldStyleVar = "Please use let or const";

// 🚨 Code Smell 3: ฟังก์ชันที่มีความซับซ้อนสูงเกินไป (Cognitive Complexity)
function deeplyNestedLogic(value) {
    if (value > 0) {
        if (value < 10) {
            for (let i = 0; i < value; i++) {
                if (i % 2 === 0) {
                    console.log("Even:", i);
                    if (i === 4) {
                        console.log("Found 4!");
                        break;
                    }
                } else {
                    console.log("Odd:", i);
                }
            }
        } else if (value < 20) {
            console.log("Value is between 10 and 19");
        } else {
            console.log("Value is 20 or more");
        }
    } else {
        console.log("Non-positive value");
    }
    return "Done";
}

// เรียกใช้ฟังก์ชัน
deeplyNestedLogic(8);

// 🚨 Code Smell 4: ฟังก์ชันที่ยาวเกินไปและทำหลายอย่าง (Long function)
function doManyThings() {
    const data = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    console.log("Sum:", sum);

    data.forEach(item => console.log("Item:", item));

    if (sum > 10) {
        console.log("Sum is large");
    } else {
        console.log("Sum is small");
    }

    return sum;
}

doManyThings();

// 🚨 Code Smell 5: Magic Number (ตัวเลขลอย ๆ โดยไม่มีคำอธิบาย)
function calculateDiscount(price) {
    return price * 0.15; // 15% discount? แต่ไม่รู้ว่าคืออะไร
}

// 🚨 Code Smell 6: ชื่อฟังก์ชันหรือตัวแปรไม่ชัดเจน
function x(y) {
    return y * y;
}

// 🚨 Code Smell 7: การใช้ console.log มากเกินไป (Logging)
console.log("Starting server...");
console.log("Loading config...");
console.log("User connected");
console.log("Processing request...");
console.log("Request done");

// 🚨 Code Smell 8: Global variable
window.globalHack = "Avoid using window or global scope";

// 🚨 Code Smell 9: Empty block (บล็อกว่าง)
if (false) {
    // ว่างเปล่า
}

// 🚨 Code Smell 10: Redundant assignment
let message = "Hello";
message = "Hello, World!"; // ค่าแรกไม่ได้ใช้
console.log(message);