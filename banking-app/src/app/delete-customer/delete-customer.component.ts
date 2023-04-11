import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {
  deleteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.deleteForm = this.formBuilder.group({
      customerId: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Delete form submitted: ', this.deleteForm.value);
    
  }
}
