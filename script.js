// Define the possible values
const possibleValues = ['"hidden"', '"visible"', '"replace"', '"autoreplace"'];

// Function to generate a random item
function generateRandomItem(key, maxValue) {
  if (key > maxValue) {
    return null;
    //The maxValue is important because if key is less than maxValue, then you won't get anything back, key has to be bigger for it to loop.
  }
  const value =
    possibleValues[Math.floor(Math.random() * possibleValues.length)]; // Select a random value with double quotes
  return `${key}: ${value}`; // Return as a key-value pair in a string
}

// Function to generate a list of items as a single object
function generateItemObject(count) {
  const items = [];
  for (let i = 1; i < count; i++) {
    items.push(generateRandomItem(i));
  }
  return `{ \n  ${items.join(',\n  ')} \n}`; // Return as a single object string with indentation
}

// Generate a list of 1000 items (you can change the count as desired)
const itemCount = 50;
const itemObjectString = generateItemObject(itemCount);

// Output the generated object string to the console with formatting
console.log(itemObjectString);
