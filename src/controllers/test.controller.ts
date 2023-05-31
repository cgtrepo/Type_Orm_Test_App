import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';



const testController = express.Router()

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req)
        console.log(file)
        cb(null, '../uploads/')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})

let upload = multer({ storage: storage }).single('file');

testController.post('/uploadFile', upload, async (req, res) => {
    console.log('Is here 123')
    console.log(req.file, 'file');
    res.send("cool");
})


//******************************************************************************************* FIN LES NOUVELLES ROUTES TESTS POUR LES NOUVEAUX MAILS*************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************************************************************************** */

export default testController