// for-of loops are mostly used with Array. Let's see how...

// Suppose we have an array
const products = ["Electronics", "Attires", "Household", "Furniture"];

for (const str of products) {
  if (str.length > 10) {
    console.log(str);
  }
}

// for-in loops are mostly used with Objects. Let's see how...

// Suppose we have Object
const fieldData = {
  title: "Mobile Application Developer",
  members: 6,
  lead: "Krishna Sir",
  myRole: "Intern",
  workingSince: "8th August",
};

for (const data in fieldData) {
  console.log(`Keys: ${data} and their Values: ${fieldData[data]}`);
}
