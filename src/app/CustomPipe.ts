import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: string) {
    var charlist = Array.from(value);
    var result = '';
    for (var char of charlist) {
      if (value.indexOf(char) % 2 == 1) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }

    return result;
  }
}
