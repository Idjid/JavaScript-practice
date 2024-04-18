let firstVar = "one";

if (true) {
  let secondVar = "two";
  console.log(secondVar);
  console.log("first var in conditional" + firstVar);

  if (true) {
    console.log("second var inside nested conditional statement" + secondVar);
  }
}

console.log("first var outside " + firstVar);
console.log(secondVar);
