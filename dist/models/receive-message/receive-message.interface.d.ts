interface MessageDataMetadata {
    display_phone_number: string;
    phone_number_id: string;
}
interface ContactProfile {
    name: string;
}
interface DataValueContact {
    profile: ContactProfile;
    wa_id: string;
}
interface MessageTextType {
    body: string;
}
interface MessageMimeType {
    caption?: string;
    mime_type: string;
    sha256: string;
    id: string;
}
interface MessageAudioType extends MessageMimeType {
    voice: boolean;
}
interface MessageDocumentType extends MessageMimeType {
    filename: string;
}
interface MessageLocationType {
    address: string;
    latitude: number;
    longitude: number;
    name: string;
    url: string;
}
interface MessageStickerType extends MessageMimeType {
    animated: boolean;
}
interface DataValueMessage {
    from: string;
    id: string;
    timestamp: number;
    type: 'text' | 'audio' | 'image' | 'video' | 'document' | 'location' | 'sticker' | 'contacts';
    text?: MessageTextType;
    audio?: MessageAudioType;
    image?: MessageDocumentType;
    video?: MessageDocumentType;
    document?: MessageDocumentType;
    location?: MessageLocationType;
    sticker?: MessageStickerType;
    contacts?: any[];
}
interface MessageDataValue {
    messaging_product: 'whatsapp';
    metadata: MessageDataMetadata;
    contacts: DataValueContact[];
    messages: DataValueMessage[];
}
interface MessageData {
    value: MessageDataValue;
    field: string;
}
export interface EntryMessage {
    id: string;
    time?: number;
    changes: MessageData[];
}
export {};
