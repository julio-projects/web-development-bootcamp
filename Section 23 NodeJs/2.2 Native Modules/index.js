const fs = require("fs");

// fs.writeFile("./message.txt", "Hello from Julio!", (err) => {
//     if (err) throw error;
//     console.log("The file has been saved");
// });

fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw error;
    console.log(data);
});
