const fs = require('fs');
const path = require('path');

const saveBase64Image = (imageBase64, fileName) => {
  return new Promise((resolve, reject) => {
    if (!imageBase64 || !fileName) {
      return reject('Image data and file name are required.');
    }

    const imageBuffer = Buffer.from(imageBase64, 'base64');
    const filePath = path.join(__dirname, '../../uploads', fileName);

    fs.writeFile(filePath, imageBuffer, (err) => {
      if (err) {
        return reject('Failed to save the image.');
      }
      resolve('Image uploaded successfully.');
    });
  });
};

module.exports = {
  saveBase64Image,
};