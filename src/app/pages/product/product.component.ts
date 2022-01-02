import { Component, OnInit } from '@angular/core';
import { FakeApiServiceService } from 'src/app/services/fake-api-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList: any;

  constructor(private api: FakeApiServiceService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
    })
  }
}
