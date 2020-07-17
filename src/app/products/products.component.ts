import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Pipe, PipeTransform} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})


export class ProductsComponent implements OnInit {

  productsList = [];
  name : string;
  color: string;


  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getAllProducts().subscribe(
      result =>{
        this.productsList = result;
      },
      error =>{
        console.log(error);
      }
    )
    
  }

  Search(){
    if(this.name != ""){
      this.productsList = this.productsList.filter(res=>{
        return res.name.match(this.name);
      });
    }else if (this.name== ""){
      this.ngOnInit();
    }
  }

  SearchColor(){
    if(this.color != ""){
      this.productsList = this.productsList.filter(res=>{
        return res.color.match(this.color);
      });
    }else if (this.color== ""){
      this.ngOnInit();
    }
  }
  
 
}


@Pipe({
  name: 'filterUnique',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // Remove the duplicate elements
    let uniqueArray = value.filter(function (el, index, array) { 
      return array.indexOf (el) == index;
    });

    return uniqueArray;
  }
}

