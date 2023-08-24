// Define the possible values
const possibleValues = ['hidden', 'visible', 'replace', 'autoreplace'];

// Function to generate a random item
function generateRandomItem() {
  const key = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit key
  const value =
    possibleValues[Math.floor(Math.random() * possibleValues.length)]; // Select a random value
  return { [key.toString()]: value }; // Return as a key-value pair in an object
}

// Function to generate a list of items as a single object
function generateItemObject(count) {
  const itemObject = {};
  for (let i = 0; i < count; i++) {
    const item = generateRandomItem();
    Object.assign(itemObject, item); // Merge each item into the main object
  }

  return itemObject;
}

// Generate a list of 1000 items (you can change the count as desired)
const itemCount = 1000;
const itemObject = generateItemObject(itemCount);

// Output the generated object to the console
console.log(itemObject);
