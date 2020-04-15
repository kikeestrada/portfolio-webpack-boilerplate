export class helloWorld {
	name: string;
	constructor(name : string) {
		this.name = name
	}
	greet(): string{
		return `Hola Mundo, Webpack con ${this.name}`
	}
}
