const arrays = [
    42,
    true,
    "Hello, World!",
    {
      name: "John",
      age: 25,
      isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
  ];
  
  // Q1: MAP METHOD //
  let strings = arrays.map((element) => String(element));
  console.log("Q1:", strings);
  
  // Q2: FILTER METHOD //
  
  let numbers = arrays.filter((element) => typeof element === "number");
  console.log("Q2:", numbers);
  
  // Q3: FOR-EACH METHOD //
  
  arrays.forEach((element) => console.log(typeof element));
  console.log("Q3:");
  
  // Q4: REDUCE METHOD //
  let sum = arrays
    .filter((element) => typeof element === "number")
    .reduce((total, num) => total + num, 0);
  console.log("Q4:", sum);
  
  // Q5: FIND METHOD //
  let firstBoolean = arrays.find((element) => typeof element === "boolean");
  console.log("Q5:", firstBoolean);
  
  // Q6: Find-INDEX METHOD //
  let firstObjectIndex = arrays.findIndex((element) => typeof element === "object" && !Array.isArray(element));
  console.log("Q6:", firstObjectIndex);
  
  // Q7: SOME METHOD //
   containsNumber = arrays.some((element) => typeof element === "number");
  console.log("Q7:", containsNumber);
  
  // Q8: EVERY METHOD //
  let allStrings = arrays.every((element) => typeof element === "string");
  console.log("Q8:", allStrings);
  