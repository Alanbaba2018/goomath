const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '../lib');
const copyPath = path.resolve(__dirname, '../dist');

fs.exists(copyPath, exist => {
  if (exist) {
    copyIndexFile();
    traverse(rootPath, copyPath);
  } else {
    fs.mkdir(copyPath, err => {
      copyIndexFile();
      traverse(rootPath, copyPath);
    })
  }
})

function copyIndexFile() {
  const curPath = path.resolve(__dirname, '../index.d.ts');
  const destPath = path.resolve(copyPath, 'index.d.ts');
  fs.exists(curPath, exist => {
    if (exist) {
      fs.copyFile(curPath, destPath, err => {
        console.log('index.d.ts复制完毕');
      })
    }
  })
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
              console.log(`${dir}复制完毕`);
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