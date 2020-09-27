import {  OtherInfo } from '../interfaces/otherInfo'

export class OtherInfoModel implements OtherInfo{
    constructor(
        public day : number,
        public month : string
    ){}
}