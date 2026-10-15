
// console.clear();
alert("Hello")
console.log("Hello Naveen!");
console.log("JavaScript Assignment Working!");

console.log("--- 1. String Declaration ---");
let firstName = 'Naveen ';                    
let lastName = "Kumar";                      
let course = `MCA in Computer Application`;       
let intro = `Student ${firstName} ${lastName} is enrolled in ${course}.`;
console.log(firstName);
console.log(lastName);
console.log(course);
console.log(intro);


console.log("\n--- 2. Length and Character Access ---");
let studentName = "Naveen Kumar";
console.log("Name:", studentName);
console.log("Length:", studentName.length);
console.log("First character:", studentName[0]);
console.log("Character at index 6:", studentName.charAt(6));
console.log("Last character:", studentName[studentName.length - 1]);


console.log("\n--- 3. Concatenation ---");
let city = "Varanasi";
let state = "Uttar Pradesh";
let addressPlus = city + ", " + state + ", India";            
let addressConcat = city.concat(", ", state, ", ", "India"); 
console.log("Using + :", addressPlus);
console.log("Using concat():", addressConcat);

console.log("\n--- 4. indexOf() ---");
let email = "2628mca0200@kiet.edu";
console.log("Email:", email);
console.log("Index of '@':", email.indexOf("@"));
console.log("Index of 'college':", email.indexOf("college"));
console.log("Index of 'gmail' (not found):", email.indexOf("gmail"));


console.log("\n--- 5. slice() ---");
let enrollment = "2628mca200";
console.log("Enrollment:", enrollment);
console.log("Year (3 to 7):", enrollment.slice(3, 7));
console.log("Branch (7 to 9):", enrollment.slice(7, 9));
console.log("Roll number (last 3):", enrollment.slice(-3));

console.log("\n--- 6. replace() ---");
let feedback = "The student is punctual. The student is hardworking. The student is polite.";
console.log("Original:", feedback);
console.log("Replace first occurrence:", feedback.replace("student", "learner"));
console.log("Replace all (regex):", feedback.replace(/student/g, "learner"));
console.log("Replace all (replaceAll):", feedback.replaceAll("student", "learner"));

console.log("\n--- 7. Uppercase and Lowercase ---");
let department = "Computer Science and Engineering";
console.log("Original:", department);
console.log("Uppercase:", department.toUpperCase());
console.log("Lowercase:", department.toLowerCase());


console.log("\n--- 8. trim() ---");
let rawInput = "   Aarav Sharma   ";
console.log("Before trim: [" + rawInput + "]");
console.log("After trim: [" + rawInput.trim() + "]");
console.log("trimStart(): [" + rawInput.trimStart() + "]");
console.log("trimEnd(): [" + rawInput.trimEnd() + "]");

console.log("\n--- 9. split() ---");
let subjectsText = "Mathematics,Operating System,Java,Communication,";
let subjectsArray = subjectsText.split(",");
console.log("Original string:", subjectsText);
console.log("Array:", subjectsArray);
console.log("Number of subjects:", subjectsArray.length);
console.log("First subject:", subjectsArray[0]);