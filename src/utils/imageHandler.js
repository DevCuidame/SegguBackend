const fs = require('fs');
const path = require('path');

const saveBase64File = (fileBase64, fileName) => {
  return new Promise((resolve, reject) => {
    if (!fileBase64 || !fileName) {
      return reject('File data and file name are required.');
    }

    const fileBuffer = Buffer.from(fileBase64, 'base64');
    const filePath = path.join(__dirname, '../../uploads', fileName);

    fs.writeFile(filePath, fileBuffer, (err) => {
      if (err) {
        return reject('Failed to save the file.');
      }
      resolve(filePath); // Retorna la ruta del archivo guardado
    });
  });
};

module.exports = {
  saveBase64File,
};