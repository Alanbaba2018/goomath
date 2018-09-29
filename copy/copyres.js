const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '../lib');
const copyPath = path.resolve(__dirname, '../dist');

if (!fs.exists(copyPath)) {
  fs.mkdir(copyPath, err => {
    traverse(rootPath, copyPath);
  })
} else {
  traverse(rootPath, copyPath);
}

function traverse(filePath, copyPath) {
  fs.readdir(filePath, (err, list) => {
    if (!err) {
      for (const dir of list) {
        const dirPath = path.resolve(filePath, dir);
        const destinPath = path.resolve(copyPath, dir);
        fs.stat(dirPath, (err, stats) => {
          if (stats.isFile() && /d\.ts$/.test(dir)) {
            fs.copyFile(dirPath, destinPath, err => {
              console.log(dir);
            });
          } else if (stats.isDirectory()) {
            fs.mkdir(destinPath, err => {
              traverse(dirPath, destinPath);
            })
          }
        })
      }
    }
  })
}