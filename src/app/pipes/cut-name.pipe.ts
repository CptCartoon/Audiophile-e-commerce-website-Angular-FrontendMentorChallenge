import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutName',
  standalone: true,
})
export class CutNamePipe implements PipeTransform {
  transform(value: string): string {
    let longName = value.split(' ');
    const wordsToRemove = ['headphones', 'earphones', 'speakers'];

    longName = longName.filter(
      (word) => !wordsToRemove.includes(word.toLowerCase())
    );

    return longName.join(' ');
  }
}
