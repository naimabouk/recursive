
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  

  function getTicketPrice(age) {
    if (age <= 12) {
      return 10;
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else {
      return 20;
    }
  }
  

  function getClothingAdvice(temperature, isRaining) {
    let advice = "";
  
    if (temperature < 0) {
      advice +=
        "Super Cold! Wear a heavy coat, scarf, bennie, gloves and winter boots. ";
    } else if (temperature < 10) {
      advice += "It's Very Cold. Wear a warm coat, hat, and gloves. ";
    } else if (temperature < 20) {
      advice += "It's Chilly. A light jacket or sweater would be a good choice. ";
    } else if (temperature < 30) {
      advice += "It's Warm. a t-shirt and jeans would be good. ";
    } else {
      advice += "It's Hot! light shorts and a t-shirt would be ideal. ";
    }
  
    if (isRaining) {
      advice += "You better not forget your umbrella or raincoat! ";
    }
  
    return advice;
  }

  const main = () => {
    console.log("Multi function Program");
  

    console.log("\n--- Leap Year Checker Program ---");
    const testYears = [
      2000, 2020, 2100, 2200, 2300, 2400, 2500, 2600, 2800, 3000,
    ];
    for (const year of testYears) {
      if (isLeapYear(year)) {
        console.log(`${year} is a leap year`);
      } else {
        console.log(`${year} is not a leap year`);
      }
    }
  
    // Ticket Pricing
    console.log("\n--- Ticket Pricing Program---");
    let age;
    while (true) {
      age = prompt("Please enter your age for ticket pricing:");
      age = parseInt(age);
  
      if (isNaN(age) || age < 0) {
        alert("Invalid input. Please enter a positive number.");
      } else {
        break;
      }
    }
    const price = getTicketPrice(age);
    alert(`The ticket price for age ${age} is $${price}.`);
  
    
    console.log("\n--- Weather Clothing Adviser Program ---");
    let temperature;
    while (true) {
      temperature = prompt("Please enter the current temperature:");
      temperature = parseFloat(temperature);
  
      if (isNaN(temperature)) {
        alert("Invalid input. Please enter a number.");
      } else {
        break;
      }
    }
  
    const isRaining = confirm("Is it raining? (OK for Yes, Cancel for No)");
  
    const clothingAdvice = getClothingAdvice(temperature, isRaining);
    alert(clothingAdvice);
  };
  

  main();