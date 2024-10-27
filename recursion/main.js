// Fibonacci Sequence
function fibonacci(n) {
    //F(0) = 0, F(1) = 1
    if (n <= 1) return n;
    // F(n) = F(n-1) + F(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Palindrome Checker
  function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // string of length 0 or 1 is a palindrome
    if (str.length <= 1) return true;
  
    // Check if first and last characters match, then recurse on the rest
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    }
  
    return false;
  }
  
  // Power Function
  function power(base, exponent) {
    // Any number raised to the power of 0 is 1
    if (exponent === 0) return 1;
  
    // Handle negative exponents
    // For negative exponents, we calculate the positive power and then take its reciprocal
    // The reciprocal of a number is 1 divided by the number
    if (exponent < 0) return 1 / power(base, -exponent);
  
    // We multiply the base with the result of raising it to one power less
    return base * power(base, exponent - 1);
  }
  
  // Tests
  console.log("Fibonacci Sequence:");
  for (let i = 0; i < 10; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
  }
  
  console.log("\nPalindrome Checker:");
  const testCases = [
    "Yawn a more Roman way",
    "Stressed desserts!",
    "Never odd or even?",
    "kayak",
    "refer",
    "civic",
    "Cigar? Toss it in a can. It is so tragic.",
    "radar",
    "hello world!",
    "On a clover, if alive, erupts a vast pure evil; a fire volcano.",
    "javascript is fun?",
  ];
  for (const sentence of testCases) {
    console.log(
      `"${sentence}" is ${isPalindrome(sentence) ? "" : "not "}a palindrome.`
    );
  }
  
  console.log("\nPower Function:");
  console.log("2^8 =", power(2, 8));
  console.log("3^-5 =", power(3, -5));
  console.log("20^0 =", power(20, 0));