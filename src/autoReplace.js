// const options = {
//   files: "./test.js", // Path to environment.prod.ts
//   from: [/jjdm/g, /jjmc/g], // Regex for the key-value pair
//   to: ["Big poop", "Small poop"], // What to replace it with
// };

function autoReplace(options) {
  try {
    const results = replace.sync(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

exports.autoReplace = autoReplace;
