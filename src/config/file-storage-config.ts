import multer from "multer";
import fs from "fs"
import path from 'path';
import { GenerateUniqueKey } from "../services/files/utils/event.util";
// -- Config Files Destination


export const fileStorageEngineTEMP = () => multer.diskStorage({

    destination: (req, file, cb) => {
        console.log(file)
        console.log(__dirname)
        const dir = path.join(__dirname, './../../tmp/');
        console.log(dir)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        if (file.mimetype.search('image') != -1) {
            const images = path.join(dir + '/images');
            if (!fs.existsSync(images)) {
                fs.mkdirSync(images);
            }
            cb(null, images)
        } else if (file.mimetype.search('video') != -1) {
            const videos = path.join(dir + '/videos');
            if (!fs.existsSync(videos)) {
                fs.mkdirSync(videos);

            }
            cb(null, videos)
        } else {
            const documents = path.join(dir + '/documents');
            if (!fs.existsSync(documents)) {
                fs.mkdirSync(documents);
            }
            cb(null, documents)
        }
    },
    filename: async (req, file, cb) => {
        let code = ""
        const dir = path.join(__dirname, '/tmp');

        await GenerateUniqueKey({
            includeUpperCase: true,
            includeNumbers: true,
            length: 20,
            startsWithLowerCase: true
        }).then(value => {
            code = value
        })
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
        let filename = code.trim() + ext.trim()
        if (file.mimetype.search('image') != -1) {
            if (fs.existsSync(dir + `\\images\\${file.originalname}`)) {
                return null
            } else {
                cb(null, filename);
            }
        } else if (file.mimetype.search('video') != -1) {
            if (fs.existsSync(dir + `\\vidoes\\${file.originalname}`)) {

            } else {
                cb(null, filename);
            }
        } else {
            console.log(dir)
            console.log(file.originalname)
            
            if (fs.existsSync(dir + `\\documents\\${file.originalname}`)) {
                console.log('Is Here 456')

            } else {
                console.log('Is Here 458')
                console.log(filename)
                cb(null, filename);
            }
        }

    }
});
