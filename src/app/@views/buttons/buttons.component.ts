import { Component, Input } from '@angular/core';import { TranslateService } from '@ngx-translate/core';
``

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  @Input() mensaje: string = '';  
  @Input() cancelar: boolean = false;
  @Input() confirmed: boolean = false
  @Input() width: string = '' 
  @Input() disabled: boolean = false
  @Input() height: string = ''

  constructor(private translate: TranslateService) {}


}
