declare module 'ot' {
	interface ITextOperation {
	}

	export class Server {
		constructor(initial_text:string);
		receiveOperation(rev:number, operation:ITextOperation):ITextOperation;
	}

	export class TextOperation {
		static fromJSON(json: string): ITextOperation;
	}
}

