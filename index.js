const myInfo = require("./information");
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `hi, i am ${myInfo.myObject.name} in camus ${myInfo.myObject.myCampus}`,
  })
);
