import { ValidatorFn } from '@angular/forms';

export declare interface FormRules {
    [key: string]: FormRule;
}

export interface FormRule {
    key: string;
    condition: string;
    value: boolean;
    errorMessage: string;
}
// adding optionals to not break the typing system
export interface FormValidator {
    name: string;
    key: string;
    validator?: ValidatorFn;
    parameters?: any;
    // default message, can be overwritten in component editor
    errorMessage?: string;
    validatorType?: {validatorFn: ValidatorFn} |
                    {
                      returnValidatorFn: (arg: any) => ValidatorFn,
                      argPattern: RegExp
                    };
}
