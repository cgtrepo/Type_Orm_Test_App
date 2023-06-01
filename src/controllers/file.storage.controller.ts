import { Application, Router } from "express";
import { ConfigRoute } from "../config/config-route";
import { FileStorageServiceImpl } from "../services/files/file-storage-service-impl";
import multer from "multer";
import { fileStorageEngineTEMP } from "../config/file-storage-config";


export class FileStorageController extends ConfigRoute {
    route: Router = Router()
    private fileService = new FileStorageServiceImpl()

    constructor(app: Application, name: string) {
        super(app, name);
    }

    getCommonRoutes(): Router {
        const upload = multer({
            storage: fileStorageEngineTEMP()
        });

        this.route.post("/single-file", upload.single('file'), (req, res) => {
            console.log('Is here 234')
            console.log(res.req.file)
            
            // res.send(media);
        })

        // this.route.post("/sale-invoice-pdf", uploadSaleInvoice.single('file'), (req, res) => {
        //     let media = new MediaFile()
        //     media.originalName = res.req.file.filename
        //     media.type = res.req.file.mimetype
        //     media.link = res.req.file.path
        //     media.mediaType = MediaType.SALES_INVOICES
        //     media.destination = DestinationType.SALES_INVOICES
        //     res.send(media);
        // })

        // this.route.post("/credit-invoice-pdf", uploadCreditInvoice.single('file'), (req, res) => {
        //     let media = new MediaFile()
        //     media.originalName = res.req.file.filename
        //     media.type = res.req.file.mimetype
        //     media.link = res.req.file.path
        //     media.mediaType = MediaType.CREDIT_INVOICES
        //     media.destination = DestinationType.CREDIT_INVOICES
        //     res.send(media);
        // })


        // this.route.post("/delete-file", verifyToken, async (req, res) => {
        //     let media: any = req.body
        //     await this.fileService.deleteFileResource(media, (response => {
        //         res.send(response)
        //     }))
        // })

        // this.route.post("/delete-file-serialize", verifyToken, async (req, res) => {
        //     let data: any = req.body
        //     await this.fileService.deleteFileResourceSerialize(data.id, data.media, (response => {
        //         res.send(response)
        //     }))
        // })

        // this.route.post("/delete-tmp-file", verifyToken, async (req, res) => {
        //     let media: any = req.body
        //     await this.fileService.deleteTmpResource(media, (response => {
        //         res.send(response)
        //     }))
        // })

        return this.route
    }
}
