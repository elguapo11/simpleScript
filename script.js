// Define the possible values
const possibleValues = ['"hidden"', '"visible"', '"replace"', '"autoreplace"'];

// Function to generate a random item
function generateRandomItem() {
  const key = `"${Math.floor(100000 + Math.random() * 900000)}"`; // Generate a 6-digit key with double quotes
  const value =
    possibleValues[Math.floor(Math.random() * possibleValues.length)]; // Select a random value with double quotes
  return `${key}: ${value}`; // Return as a key-value pair in a string
}

// Function to generate a list of items as a single object
function generateItemObject(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(generateRandomItem());
  }
  return `{ ${items.join(', ')} }`; // Return as a single object string
}

// Generate a list of 1000 items (you can change the count as desired)
const itemCount = 1000;
const itemObjectString = generateItemObject(itemCount);

// Output the generated object string to the console
console.log(itemObjectString);
