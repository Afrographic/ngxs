import { Tutorial } from "../models/tutorial.model";

export class Add_Tutorial{
    static readonly type = '[Tutorial] Add';

    constructor(public payload: Tutorial) { }
    
}

export class Remove_Tutorial {
    static readonly type = '[Tutorial] Remove';

    constructor(public payload: string) { }

}
