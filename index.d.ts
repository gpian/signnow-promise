export = SignNowPromise;

declare function SignNowPromise(settings: SignNowPromise.Settings): SignNowPromise.SignNow;

declare namespace SignNowPromise {
    export interface Settings {
        credentials: string;
        production: boolean;
    }

    export interface SignNow {
        document: Document;
        enumerations: Enumerations;
        folder: Folder;
        oauth2: OAuth2;
        template: Template;
        user: User;
        webhook: Webhook;
    }

    export interface Document {
        /**
         * uploads a file and creates a document. This endpoint accepts .doc, .docx, .pdf, and .png file types
         * @param obj  
         */
        create(obj: DocumentCreate) : Promise<any>;
        /**
         * uploads a file that contains signnow Document Field Tags. This endpoint
         * only accepts .pdf (You may convert the document from .doc or .docx to .pdf)
         * @param obj  
         */
        fieldextract(obj: DocumentFieldExtract) : Promise<any>;
        /**
         * list all documents for user
         * @param obj  
         */
        list(obj: DocumentList) : Promise<any>;
        /**
         * retrieve a document resource
         * @param obj  
         */
        view(obj: DocumentView) : Promise<any>;
        /**
         * update an existing document. Add fields [signature | text | initials | checkbox ], elements [signature | text | check]
         * @param obj  
         */
        update(obj: DocumentUpdate) : Promise<any>;
        /**
         * download a collapsed document
         * @param obj  
         */
        download(obj: DocumentDownload) : Promise<any>;
        /**
         * creates a one-time use URL for anyone to download the document as a PDF.
         * @param obj  
         */
        share(obj: DocumentShare) : Promise<any>;
        /**
         * create an invite to sign a document. You can create a simple free form invite or a role-based invite.
         * @param obj  
         */
        invite(obj: DocumentInvite) : Promise<any>;
        /**
         * cancel an invite to a document.
         * @param obj  
         */
        cancelInvite(obj: DocumentCancelInvite) : Promise<any>;
        /**
         * merges existing documents into one.
         * @param obj  
         */
        merge(obj: DocumentMerge) : Promise<any>;
        /**
         * get the history of a document
         * @param obj  
         */
        history(obj: DocumentHistory) : Promise<any>;
    }

    export interface Enumerations {
        /**
         * add an enumeration field(drop down) to a document.
         * @param obj  
         */
        addField(obj: EnumerationsAddField) : Promise<any>;
        /**
         * add enumeration options to the field that was created using addField.
         * @param obj  
         */
        addOptions(obj: EnumerationsAddOptions) : Promise<any>;
    }

    export interface Folder {
        /**
         * list folders
         * @param obj  
         */
        list(obj: FolderList) : Promise<any>;
        /**
         * get documents in a folder
         * @param obj  
         */
        documents(obj: FolderDocuments) : Promise<any>;
    }

    export interface OAuth2 {
        /**
         * request an access token for a user
         * @param obj  
         */
        requestToken(obj: OAuth2RequestToken) : Promise<any>;
        /**
         * verify an access token for a user
         * @param obj  
         */
        verify(obj: OAuth2Verify) : Promise<any>;
    }

    export interface Template {
        /**
         * create a template by flattening an existing document.
         * @param obj  
         */
        create(obj: TemplateCreate) : Promise<any>;
        /**
         * create a new document by copying a flattened document. If a name is not supplied
         * than it will default to the original document's name.
         * @param obj  
         */
        duplicate(obj: TemplateDuplicate) : Promise<any>;
    }

    export interface User {
        /**
         * create new user account
         * @param obj  
         */
        create(obj: UserCreate) : Promise<any>;
        /**
         * retrieve user account details
         * @param obj  
         */
        retrieve(obj: UserRetrieve) : Promise<any>;
    }

    export interface Webhook {
        /**
         * list webhooks
         * @param obj  
         */
        list(obj: WebhookList) : Promise<any>;
        /**
         * create webhook
         * @param obj  
         */
        create(obj: WebhookCreate) : Promise<any>;
    }

    export interface Token {
        token: string;
    }
    export interface TokenAndId extends Token {
        id: string;
    }
    export interface DocumentCreate extends Token {
        filepath: string;
    }
    export interface DocumentFieldExtract extends DocumentCreate {}
    export interface DocumentList extends Token {}
    export interface DocumentView extends TokenAndId {}
    export interface DocumentUpdate extends TokenAndId {
        fields: object;
    }
    export interface DocumentDownload extends TokenAndId {}
    export interface DocumentShare extends TokenAndId {}
    export interface DocumentInvite extends TokenAndId {
        data: object;
    }
    export interface DocumentCancelInvite extends TokenAndId {}
    export interface DocumentMerge extends Token {
        name: string;
    }
    export interface DocumentHistory extends TokenAndId {}

    export interface EnumerationsAddField extends Token {
        document_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
        page_number: number;
        role: string;
        required: boolean;
        label: string;
    }
    export interface EnumerationOption {
        enumeration_id: string;
        data: string;
    }
    export interface EnumerationsAddOptions extends Token {
        enumeration_options: Array<EnumerationOption>;
    }
    export interface FolderList extends Token {}
    export interface FolderDocuments extends TokenAndId {
        filter: Array<object>;
        sort: object;
    }
    export interface OAuth2RequestToken {
        username: string;
        password: string;
    }
    export interface OAuth2Verify extends Token {}
    export interface TemplateCreate extends Token {
        document_id: string;
        document_name: string;
    }
    export interface TemplateDuplicate extends TokenAndId {
        name: string;
    }

    export interface UserCreate {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    }
    export interface UserRetrieve extends Token {}

    export interface WebhookList extends Token {}
    export interface WebhookCreate extends Token {
        event: string;
        callback_url: string;
    }
}