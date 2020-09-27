import { myFormInterface } from '../interfaces/myForm'
import { OtherInfoModel } from '../models/ohterInfo.model'

export class myFormModel implements myFormInterface{
    constructor(
        public firstName : string,
        public lastName : string,
        public birthday : string | number,
        public otherInfo : OtherInfoModel
    ){}
}