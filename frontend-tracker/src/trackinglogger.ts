import { Guid } from "guid-typescript";
 
export class GenerateGuid {
    public static trackingId: Guid;

    private constructor() {
        GenerateGuid.createGuid();
    }

    public static getGuid() {
        return this.trackingId;
    }

    public static createGuid(){
        return this.trackingId = Guid.create();
    }    
 
}


