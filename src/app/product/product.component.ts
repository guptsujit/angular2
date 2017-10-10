import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  rows = [];
  productname = "";  
  errorMessage = "";
  constructor() { }

  ngOnInit() {
  }

  addRow(product) {
    if (product.valid) {
      this.rows.push({ productname: this.productname });
      this.productname = '';
      this.errorMessage = '';
    }else{
      this.errorMessage = 'Please enter product name';
    }
  }
  deleteRow(index) {
    this.rows.splice(index,1);
    //console.log(index)

  }
}
