import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operatorStringToSign'
})
export class OperatorStringToSignPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'add') {
      return '+';
    } else if (value === 'sub') {
      return '-';
    } else if (value === 'mult') {
      return '*';
    } else {
      return ':';
    }
  }

}
