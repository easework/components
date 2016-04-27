import {MyComp} from './comp';

export class MainComp {
	comp: MyComp;
	constructor(comp: MyComp) {
		this.comp=comp;
	}
	
	public doSomething() {
		this.comp.doComp();
	}
}
