import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsService {

  constructor() { }

  returnValueOfCondition<T>(
    condition: T, 
    value1: T,
    value2: T,  
  ): T{
    return condition ? value1: value2; 
  }
}
