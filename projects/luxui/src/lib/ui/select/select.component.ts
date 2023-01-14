import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'lx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public selected!: string;

  @Input()
  public required = false;

  @Input()
  public disabled = false;

  @ViewChild('input')
  public input!: ElementRef;

  // @ViewChild(DropdownComponent)
  // public dropdown: DropdownComponent;

  // @ContentChildren(CustomSelectOptionComponent)
  // public options: QueryList<CustomSelectOptionComponent>;

  // public selectedOption: CustomSelectOptionComponent;

  // public displayText: string;

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  // private keyManager: ActiveDescendantKeyManager<CustomSelectOptionComponent>;

  // constructor(private dropdownService: CustomDropdownService) {
  //   this.dropdownService.register(this);
  // }

  // public ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.selectedOption = this.options
  //       .toArray()
  //       .find((option) => option.key === this.selected);
  //     this.displayText = this.selectedOption ? this.selectedOption.value : '';
  //     this.keyManager = new ActiveDescendantKeyManager(this.options)
  //       .withHorizontalOrientation('ltr')
  //       .withVerticalOrientation()
  //       .withWrap();
  //   });
  // }

  // public showDropdown() {
  //   this.dropdown.show();

  //   if (!this.options.length) {
  //     return;
  //   }

  //   this.selected
  //     ? this.keyManager.setActiveItem(this.selectedOption)
  //     : this.keyManager.setFirstItemActive();
  // }

  public hideDropdown() {
    // this.dropdown.hide();
  }

  public onDropMenuIconClick(event: UIEvent) {
    event.stopPropagation();
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.click();
    }, 10);
  }

  public selectOption(option: any) {
    // this.keyManager.setActiveItem(option);
    // this.selected = option.key;
    // this.selectedOption = option;
    // this.displayText = this.selectedOption ? this.selectedOption.value : '';
    // this.hideDropdown();
    // this.input.nativeElement.focus();
    // this.onChange();
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.selected = obj;
  }

  public onTouched() {
    this.onTouchedFn();
  }

  public onChange() {
    this.onChangeFn(this.selected);
  }
}
