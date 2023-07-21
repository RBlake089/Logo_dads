const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
const SVG = require("./lib/svg");

function writeToFile(fileName, answer){
    fs.writeFile(fileName, answer,(err) =>{
        err? console.log(err): console.log("Logo has been created")
    
    } )
}
function promptUser(){
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Please enter text for logo. (Text should be up to be 3 characters)",
        },
        {
            type: "input",
            name: "textcolor",
            message: "Please enter a text color (Enter keyword or a hexadecimal number):",
        },
        {

            type: "input",
            name: "textbackgroundColor",
            message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose which shape you would like?",
            choices: ["Circle", "Square", "Triangle"],
        },
    ]).then((answer)=>{
        let logo
        switch (answer.shape) {
            case "Circle":
                logo = new Circle()
                break;
            case "Square":
                logo = new Square()
                break;
            case "Triangle":
                logo = new Triangle()
                break;
            
        
            default:
                break;
        }
        logo.setColor(answer.textbackgroundColor)
        const newLogo = new SVG()
        newLogo.setShape(logo)
        newLogo.setText(answer.text, answer.textcolor)
        if(answer.text.length > 3){
            console.log("what wrong with you")
            promptUser()
        } else {
            writeToFile("logo.svg", newLogo.render())
        }
    })
}promptUser()