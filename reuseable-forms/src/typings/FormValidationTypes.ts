import type ValidationFnResult from "@/models/ValidationFnResult";
import type ValidatorFns from "@/models/BaseValidators";

export type Validator = { type: ValidatorFns; validate: ValidatorFn };
export type ValidatorFn = (input: string) => ValidationFnResult;
