import type { Validator } from "@/typings/FormValidationTypes";

export default class FormInput {
    isValid: boolean = true;
    propertyName: string;
    validators: Array<Validator>;
    value: string = "";

    constructor(propertyName: string, validators: Array<Validator> = []) {
        this.propertyName = propertyName;
        this.validators = validators;
    }
}
