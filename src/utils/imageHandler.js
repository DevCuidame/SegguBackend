const fs = require("fs");

async function buildImage(dir, folder, base64) {
  try {
    const match = base64.match(/^data:image\/(\w+);base64,/);
    if (!match) {
      throw new Error("Base64 no válido");
    }
    const extension = match[1];
    const decoding = base64.replace(/^data:image\/\w+;base64,/, "");
    const directoryPath = `../uploads/images/${folder}/`;

    await fs.promises.mkdir(directoryPath, { recursive: true });

    await fs.promises.writeFile(`${directoryPath}${dir}.${extension}`, decoding, {
      encoding: "base64",
    });

    return `${dir}.${extension}`;
  } catch (error) {
    throw new Error("Error al construir la imagen: " + error.message);
  }
}

async function deleteImage(folder, path) {
  try {
    await fs.promises.unlink(`../uploads/images/${folder}/${path}`);
  } catch (error) {
    throw new Error("Error al eliminar la imagen: " + error.message);
  }
}


module.exports = {
  buildImage,
  deleteImage,
};
