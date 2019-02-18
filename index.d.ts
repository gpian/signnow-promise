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

    export interface Callback {
        (err: any, data: any): void;
    }

    export interface Document {
        /**
         * uploads a file and creates a document. This endpoint accepts .doc, .docx, .pdf, and .png file types
         * @param obj 
         * @param callback 
         */
        create(obj: any, callback: Callback) : any;
        /**
         * uploads a file that contains signnow Document Field Tags. This endpoint
         * only accepts .pdf (You may convert the document from .doc or .docx to .pdf)
         * @param obj 
         * @param callback 
         */
        fieldextract(obj: any, callback: Callback) : any;
        /**
         * list all documents for user
         * @param obj 
         * @param callback 
         */
        list(obj: any, callback: Callback) : any;
        /**
         * retrieve a document resource
         * @param obj 
         * @param callback 
         */
        view(obj: any, callback: Callback) : any;
        /**
         * update an existing document. Add fields [signature | text | initials | checkbox ], elements [signature | text | check]
         * @param obj 
         * @param callback 
         */
        update(obj: any, callback: Callback) : any;
        /**
         * download a collapsed document
         * @param obj 
         * @param callback 
         */
        download(obj: any, callback: Callback) : any;
        /**
         * creates a one-time use URL for anyone to download the document as a PDF.
         * @param obj 
         * @param callback 
         */
        share(obj: any, callback: Callback) : any;
        /**
         * create an invite to sign a document. You can create a simple free form invite or a role-based invite.
         * @param obj 
         * @param callback 
         */
        invite(obj: any, callback: Callback) : any;
        /**
         * cancel an invite to a document.
         * @param obj 
         * @param callback 
         */
        cancelInvite(obj: any, callback: Callback) : any;
        /**
         * merges existing documents into one.
         * @param obj 
         * @param callback 
         */
        merge(obj: any, callback: Callback) : any;
        /**
         * get the history of a document
         * @param obj 
         * @param callback 
         */
        history(obj: any, callback: Callback) : any;
    }

    export interface Enumerations {
        /**
         * add an enumeration field(drop down) to a document.
         * @param obj 
         * @param callback 
         */
        addField(obj: any, callback: Callback) : any;
        /**
         * add enumeration options to the field that was created using addField.
         * @param obj 
         * @param callback 
         */
        addOptions(obj: any, callback: Callback) : any;
    }

    export interface Folder {
        /**
         * list folders
         * @param obj 
         * @param callback 
         */
        list(obj: any, callback: Callback) : any;
        /**
         * get documents in a folder
         * @param obj 
         * @param callback 
         */
        documents(obj: any, callback: Callback) : any;
    }

    export interface OAuth2 {
        /**
         * request an access token for a user
         * @param obj 
         * @param callback 
         */
        requestToken(obj: any, callback: Callback) : any;
        /**
         * verify an access token for a user
         * @param obj 
         * @param callback 
         */
        verify(obj: any, callback: Callback) : any;
    }

    export interface Template {
        /**
         * create a template by flattening an existing document.
         * @param obj 
         * @param callback 
         */
        create(obj: any, callback: Callback) : any;
        /**
         * create a new document by copying a flattened document. If a name is not supplied
         * than it will default to the original document's name.
         * @param obj 
         * @param callback 
         */
        duplicate(obj: any, callback: Callback) : any;
    }

    export interface User {
        /**
         * create new user account
         * @param obj 
         * @param callback 
         */
        create(obj: any, callback: Callback) : any;
        /**
         * retrieve user account details
         * @param obj 
         * @param callback 
         */
        retrieve(obj: any, callback: Callback) : any;
    }

    export interface Webhook {
        /**
         * list webhooks
         * @param obj 
         * @param callback 
         */
        list(obj: any, callback: Callback) : any;
        /**
         * create webhook
         * @param obj 
         * @param callback 
         */
        create(obj: any, callback: Callback) : any;
    }
}