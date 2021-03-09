import { Component, forwardRef, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { INewBlockFormTemplate } from '../../template.models';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTemplateComponent),
      multi: true
    }
  ]
})
export class FormTemplateComponent implements OnChanges, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  @Input() formTemplate: Array<INewBlockFormTemplate>;

  constructor(private formBuilder: FormBuilder) {
  }

  get value(): any {
    return this.form.value;
  }

  set value(value) {
    this.form.setValue(value);
    this.onChange(value);
  }

  writeValue(value): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  getFormControls(): any {
    const formControls = {};
    this.formTemplate
      .map(formElement => formElement.formControlLabel)
      .forEach(formControl => {
        formControls[formControl] = [];
      });
    return formControls;
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  ngOnChanges(): void {
    this.form = this.formBuilder.group(this.getFormControls());
    console.log(this.form);
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
