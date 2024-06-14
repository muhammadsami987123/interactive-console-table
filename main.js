import inquirer from "inquirer";
//  Got Input from user
const userInput = await inquirer.prompt([
    {
        name: "Input",
        type: "number",
        message: " please Enter your Number"
    }
]);
//  use INput value
let userNumber = userInput.Input;
// loop 
for (let i = 1; i <= 10; i++) {
    let result = userNumber * i;
    console.log(`${userNumber} x ${i} = ${result}`);
}
