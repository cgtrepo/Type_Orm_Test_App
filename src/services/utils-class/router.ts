import { Router } from "express";

export class ControllerRoutePayload<ServiceClass> {
    serviceClassInstance: ServiceClass;
    service: ((object: ServiceClass) => (paramss: any, callback: Function) => Promise<void>);
    constructor(serviceClassInstance: ServiceClass,
        service: ((object: ServiceClass) => (paramss: any, callback: Function) => Promise<void>)) {
        this.serviceClassInstance = serviceClassInstance; this.service = service;
    }
}

export function ROUTER_POST_MODEL(router: Router) {
    return (route: string, service: ControllerRoutePayload<any>) => {
        console.log(service)
        return router.post(route, (async (req, res, next) => {
            let reqData = req.body.reqData;
            console.log('Is Here 123')
            console.log(reqData)
            await service.serviceClassInstance[service.service(service.serviceClassInstance).name]
                (reqData, (response) => { res.send(response) });
        }))
    }
}