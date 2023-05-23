interface Entry {
    id: string;
    time?: number;
    changes: any[];
}
export declare class ReceiveMessageDto {
    object: string;
    entry: Entry[];
}
export {};
