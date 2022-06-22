// To parse this data:
//
//   import { Convert } from "./file";
//
//   const abi = Convert.toAbi(json);

export interface Abi {
    anonymous?:       boolean;
    inputs?:          { [key: string]: any }[];
    name?:            string;
    type?:            Type;
    constant?:        boolean;
    payable?:         boolean;
    stateMutability?: StateMutability;
    outputs?:         { [key: string]: any }[];
}

export enum StateMutability {
    Nonpayable = "nonpayable",
    Payable = "payable",
    Pure = "pure",
    View = "view",
}

export enum Type {
    Constructor = "constructor",
    Error = "error",
    Event = "event",
    Fallback = "fallback",
    Function = "function",
    Receive = "receive",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAbi(json: string): Abi[] {
        return JSON.parse(json);
    }

    public static abiToJson(value: Abi[]): string {
        return JSON.stringify(value);
    }
}
