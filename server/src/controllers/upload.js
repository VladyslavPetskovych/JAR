const fs = require("fs");
const express = require('express');
const app = express();
const db = require("../models");
const Image = db.images;


const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    // type: req.file.mimetype,
    // name: req.file.originalname,
    // itemname: req.body['itemname'],
    // itemdesc: req.body['itemdesc'],
    // itemprice: req.body['itemprice'],
    console.log(req.body['itemname']);
    console.log(req.body['itemname']);
    console.log(req.body['itemname']);

    console.log(JSON.stringify(req.body));
    console.log(req.file.filename);
    Image.create({
      type: req.file.mimetype,
      name: req.file.filename,
      itemname: req.body['itemname'],
      itemdesc: req.body['itemdesc'],
      itemprice: req.body['itemprice'],
      data: fs.readFileSync(
        __basedir + "/upload/" + req.file.filename
      ),
    })
    return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};