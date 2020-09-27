import { OtherInfoModel } from '../models/ohterInfo.model'
export interface myFormInterface{
    firstName: string,
    lastName: string,
    birthday: string | number,
    otherInfo : OtherInfoModel
} 