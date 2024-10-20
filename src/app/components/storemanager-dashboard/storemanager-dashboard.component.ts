import { Component, inject, ViewChild } from '@angular/core';
import { ItemFormComponent } from '../../shared/components/item-form/item-form.component';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../models/productModel';
import { ProductTableComponent } from "../../shared/components/product-table/product-table.component";
import { itemForm } from '../../shared/enums/formTypes';
import { Router } from '@angular/router';
import { SocketioService } from '../../shared/services/socketio.service';

@Component({
  selector: 'app-storemanager-dashboard',
  standalone: true,
  imports: [ItemFormComponent, ProductTableComponent],
  templateUrl: './storemanager-dashboard.component.html',
  styleUrl: './storemanager-dashboard.component.css',
})
export class StoremanagerDashboardComponent {
  itemFormType = itemForm
  products: IProduct[] = []
  private productService = inject(ProductService)
  private router = inject(Router)
  private socketio = inject(SocketioService)
  @ViewChild(ItemFormComponent) itemformComponent!: ItemFormComponent

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.data;
      },
    });

    this.socketio.on<IProduct>("product-added").subscribe({
      next:(res)=>{
        this.pushNewProduct(res)
      }
    })

    this.socketio.on<IProduct>("product-deleted").subscribe({
      next:(res)=>{
        this.deleteProduct(res)
      }
    })
  }

  pushNewProduct(data: IProduct){
    this.products.push(data)
  }

  deleteProduct(res: IProduct){
    this.products = this.products.filter((product)=>{
      return String(product._id)!=String(res._id)
    })
  }


  logout() {
    localStorage.removeItem("storemanagerToken");
    this.router.navigate(["storemanager/login"])
  }

  openModal(){
    console.log("Hiiii");
    
    this.itemformComponent.openModal()
  }
}
