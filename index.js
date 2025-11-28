         //mini calculator
    
    function calculate() {
      // Taking two numbers from the user
      let num1 = parseFloat(prompt("Enter the first number:"));
      let num2 = parseFloat(prompt("Enter the second number:"));

      // Performing arithmetic operations
      let addition = num1 + num2;
      let subtraction = num1 - num2;
      let multiplication = num1 * num2;
      let division = num1 / num2;
      let modulus = num1 % num2;

    }
        // smart login samulator

      // Step 1: Declare saved credentials
    let savedEmail = " syedhidayat@gmail.com";
    let savedPassword = "1234567";

    // Step 2: Ask user for email and password
    let userEmail = prompt("Enter your email:");
    let userPassword = prompt("Enter your password:");

    // Step 3: Compare and print results
    console.log("Email match:", userEmail === savedEmail);
    console.log("Password match:", userPassword === savedPassword);

    // Combined check using logical operators
    if (userEmail === savedEmail && userPassword === savedPassword) {
      console.log("  Login successful! Welcome!");
      alert("  Login successful! Welcome!");
    } else if (userEmail !== savedEmail && userPassword === savedPassword) {
      console.log("  Incorrect email!");
      alert("  Incorrect email!");
    } else if (userEmail === savedEmail && userPassword !== savedPassword) {
      console.log("  Incorrect password!");
      alert("  Incorrect password!");
    } else {
      console.log("  Both email and password are incorrect!");
      alert("  Both email and password are incorrect!");
    }
            //counter program

    let count = 0;
    console.log("Initial count:", count); // 0

    // postfix increment: returns old value, then increments
    console.log("count++ returns:", count++); // prints 0, count becomes 1
    console.log("After count++ count is:", count); // 1

    // prefix increment: increments first, then returns
    console.log("++count returns:", ++count); // count becomes 2, prints 2
    console.log("After ++count count is:", count); // 2

    // postfix decrement: returns old value, then decrements
    console.log("count-- returns:", count--); // prints 2, count becomes 1
    console.log("After count-- count is:", count); // 1

    // prefix decrement: decrements first, then returns
    console.log("--count returns:", --count); // count becomes 0, prints 0
    console.log("After --count count is:", count); // 0

    // step-by-step increase to 3 and decrease to 0 using ++/--
    console.log("---- Step loop example ----");
    // increment to 3
    count++; console.log("count after 1st ++:", count); // 1
    count++; console.log("count after 2nd ++:", count); // 2
    count++; console.log("count after 3rd ++:", count); // 3

    // decrement back to 0
    count--; console.log("count after 1st --:", count); // 2
    count--; console.log("count after 2nd --:", count); // 1
    count--; console.log("count after 3rd --:", count); // 0

          //bounas task 
    // Ask the user for marks
    let marks = prompt("Enter your marks out of 100:");

    // Convert input to a number
    marks = Number(marks);
 

    // Optional: show alert too
    if (marks === 100) {
      alert("🎉 Perfect Score! Well done!");
    } else if (marks >= 50) {
      alert("✅ You passed!");
    } else {
      alert("❌ You failed. Try again!");
    }
     