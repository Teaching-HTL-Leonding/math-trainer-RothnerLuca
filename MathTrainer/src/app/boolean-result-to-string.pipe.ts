import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanResultToString'
})
export class BooleanResultToStringPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? '✔' : '⤫';
  }

}
