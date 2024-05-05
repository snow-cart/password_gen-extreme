//                                 //
//       Password generator        //
//     Made by mykolas@bonk.lt     //
//                                 //


const fs = require('fs');


//                      //
//     Config begin     //
//                      //

let outputPath = "./password.txt";

let length = 100;
let checkpointFreq = 10;
    
//                      //
//      Config end      //
//                      //



//                                                                      //
/* Ignition: */ generatePassword(outputPath, length, checkpointFreq);   //
//                                                                      //



//                      //
//      Code begin      //
//                      //



function clearFile(outputPath) {
   fs.writeFile(outputPath, "", () => console.log("Cleared `", outputPath, "`"));
}

function appendFile(path, content, callback) {
   fs.appendFile(path, content, (err) => {
      if (err) {
         console.error('Error writing file:', err);
         return;
      }
      callback();
   });
}

function generatePassword(outputPath, length, checkpointFreq) {
   let password = "";
   let checkpoint = length / checkpointFreq;
   clearFile(outputPath);
   for (let i=0, j=0; i<=length; i++, j++) {

      password += ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","(",")"]
               [ Math.floor (Math.random() * 72) ];

      if (j==checkpoint) {
         appendFile(outputPath, password, 
            () => {console.log(`something's cooking `);});
         j=0, password = "";
      }
   };
}

//                      //
//       Code end       // 
//                      //
