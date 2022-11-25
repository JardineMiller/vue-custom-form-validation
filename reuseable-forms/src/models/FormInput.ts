import type { Validator } from "@/typings/FormValidationTypes";

export default class FormInput {
    isValid: boolean = true;
    propertyName: string;
    validators: Array<Validator>;
    value: string | undefined;

    constructor(
        propertyName: string,
        validators: Array<Validator> = [],
        initialValue: string | undefined = undefined
    ) {
        this.propertyName = propertyName;
        this.validators = validators;
        this.value = initialValue;
    }
}
