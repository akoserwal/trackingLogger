import { Guid } from "guid-typescript";
export declare class GenerateGuid {
    static trackingId: Guid;
    private constructor();
    static getGuid(): Guid;
    static createGuid(): Guid;
}
