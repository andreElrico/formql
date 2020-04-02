import { Injectable } from '@angular/core';
import { FormValidator } from '../models/rule.model';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const invalidAdd = function(v: FormValidator, mainArr: FormValidator[]) {
  return mainArr.some(m => m.key === v.key);
}

const ARBITRARY_INPUT  = null;
const NATURAL_NUMBER_0 = /^0|[1-9]\d*$/;
const FLOAT_NUMBER     = /^0|-?[1-9]\d*(?:\.\d+)?$/;

const CORE_VALIDATORS: FormValidator[] = [

  // @angular/forms
  {
    name: 'Required',
    validatorType: {validatorFn: Validators.required},
    key: 'required',
    errorMessage: 'This field is required.'
  },
  {
    name: 'Minimum',
    validatorType: {returnValidatorFn: Validators.min, argPattern: FLOAT_NUMBER },
    key: 'min',
    errorMessage: '${actual} not ≥ ${min}'
  },
  {
    name: 'Maximum',
    validatorType: {returnValidatorFn: Validators.max, argPattern: FLOAT_NUMBER},
    key: 'max',
    errorMessage: '${actual} not ⩽ ${max}'
  },
  {
    name: 'Require "true" value',
    validatorType: {validatorFn: Validators.requiredTrue},
    key: 'requiredTrue',
    errorMessage: 'Value is not "true"'
  },
  {
    name: 'Email',
    validatorType: {validatorFn: Validators.email},
    key: 'email',
    errorMessage: 'Incorrect email'
  },
  {
    name: 'Regular Expression',
    validatorType: {returnValidatorFn: Validators.pattern, argPattern: ARBITRARY_INPUT},
    key: 'pattern',
    errorMessage: '${actualValue} does not match ${requiredPattern}'
  },
  {
    name: 'Minimum length',
    validatorType: {returnValidatorFn: Validators.minLength, argPattern: NATURAL_NUMBER_0},
    key: 'minLength',
    errorMessage: '${actualLength} not ≥ ${requiredLength}'
  },
  {
    name: 'Maximum length',
    validatorType: {returnValidatorFn: Validators.maxLength, argPattern: NATURAL_NUMBER_0},
    key: 'maxLength',
    errorMessage: '${actualLength} not ⩽ ${requiredLength}'
  },
  // @FormQl/core
  
]

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private _allValidators = new BehaviorSubject<FormValidator[]>(CORE_VALIDATORS);

  get allValidators() {
    return this._allValidators.asObservable();
  }

  constructor() { }

  public addValidators(vs: FormValidator[]) {

    if (vs.some(v => invalidAdd(v, this._allValidators.value)) ) {

      console.error('ValidationService -> addValidators ->  invalidAdd');

      return;
    }

    this._allValidators.next([
      ...this._allValidators.value,
      ...vs
    ]);

  }

}
