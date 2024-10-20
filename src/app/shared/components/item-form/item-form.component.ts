import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { itemForm } from '../../enums/formTypes';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../models/productModel';



@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class  ItemFormComponent {
  @ViewChild('openButton') openButton!: ElementRef<HTMLButtonElement>
  @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>
  @Input({required:true}) formType!: itemForm;
  @Output() addProductEvent: EventEmitter<IProduct> = new EventEmitter()
  // private productService = inject(ProductService)
  productForm!: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService){
    this.productForm = this.fb.group({
      name: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
      quantity: new FormControl("",[Validators.required]),
    })
  }

  closeModal(){
    this.closeButton.nativeElement.click()
  }

  openModal(){
    console.log("kokokok");
    console.log(this.openButton.nativeElement);
    
    
    this.openButton.nativeElement.click()
  }

  onSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value,"SUBMIT");
      this.productService.addProduct(this.productForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          // this.addProductEvent.emit(res.data);  not needed ,since socketio take care of this
          this.closeModal()
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    
  }

}
