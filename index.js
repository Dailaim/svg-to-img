import sharp from "sharp";
import fs from "node:fs";

export function converter (resize=(500, 500), pathSVG= "./svg/", pathImg= "./img/"){
const files = fs.readdirSync(pathSVG);

console.log(files);

files.map((file) => {
  console.log(file);

  const name = file.replace(".svg", ".png");

  sharp(pathSVG + file)
    .png()
    .resize(resize)
    .toFile(pathImg + name)
    .then(function (info) {
      console.log(info);
    })
    .catch(function (err) {
      console.log(err);
    });
});}

