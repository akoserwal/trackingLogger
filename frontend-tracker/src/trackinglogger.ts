import { Guid } from "guid-typescript";
 
export class TrackingLogger {
    public trackingId: Guid;

    constructor() {
        this.trackingId = Guid.create();
        console.log(this.trackingId);
        localStorage.setItem("id",this.trackingId.toString());
    }
    

}

export let trackingLogger = new TrackingLogger();
