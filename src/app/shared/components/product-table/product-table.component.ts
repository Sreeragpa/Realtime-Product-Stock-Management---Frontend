import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../../models/productModel';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  @Input({required:true}) products:IProduct[] = [];
  

  private productService = inject(ProductService)

  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe({
      next:(res)=>{
      }
    })
  }



  editProduct(product: IProduct){

  }

}
