import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'paragraph',
})
export class ParagraphPipe implements PipeTransform {
  constructor(
    protected sanitizer: DomSanitizer
  ) {}
  transform(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(/\n/g, '<br>'))
  }

}

