import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})

export class ImageUrlPipe implements PipeTransform {

  transform(value: string): string {
    let localhost = "https://localhost:44369/";
    return localhost + value;
  }

}