// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (!str) return str;

  const words = str.split(/[-_ ]/);

  const camelCase = words.map((word, index) => { 
    if (index === 0) return word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelCase.join("")

}

console.log(toCamelCase("the-stealth -warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The _Stealth- Warrior"));







// word.charAt(0).toUpperCase() // يعطي "S"
// word.slice(1) // يعطي "tealth"
// word.charAt(0).toUpperCase() + word.slice(1); // يعطي "Stealth"