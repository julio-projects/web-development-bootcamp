/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import { image } from "qr-image";
import { writeFile, createWriteStream, writeFileSync } from "fs";

let question = {
    name: "url",
    message: "What URL do you want to turn into a QR-Code?",
};
inquirer.prompt(question).then((ans) => {
    const url = ans.url;
    console.log(url);

    let qrPng = image(url);
    qrPng.pipe(createWriteStream("./images/qr-code.png"));

    writeFile("./images/url.txt", url, (err) => {
        if (err) throw err;
        console.log("File written successfully!");
    });
});
