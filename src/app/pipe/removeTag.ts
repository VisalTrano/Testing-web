import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removeTag'})
export class RemoveTag implements PipeTransform {
  transform(value: string): string {
    return value.replace(/<.*?>/g, '');
  }
}
