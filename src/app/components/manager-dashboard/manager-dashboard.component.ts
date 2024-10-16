import { Component, inject } from '@angular/core';
import { ItemFormComponent } from '../../shared/components/item-form/item-form.component';
import { itemForm } from '../../shared/enums/formTypes';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../models/productModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [ItemFormComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css',
})
export class ManagerDashboardComponent {
  private productService = inject(ProductService);
  products: IProduct[] = []
  private router = inject(Router)
editUser(_t21: any) {
throw new Error('Method not implemented.');
}
  itemFormType = itemForm

  items: any;

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next:(res)=>{
        console.log(res,"RESS");
        this.products = res.data
      }
    })
  }

  pushNewProduct(data: IProduct){
    this.products.push(data)
  }

  deleteProduct(id: string){
    console.log(id);
    
    this.productService.deleteProduct(id).subscribe({
      next:(res)=>{
        this.products = this.products.filter((product)=>{
          return String(product._id)!=String(res.data._id)
        })
      }
    })
  }

  logout(){
    localStorage.removeItem("managerToken");
    this.router.navigate(['manager/login'])
  }
}
