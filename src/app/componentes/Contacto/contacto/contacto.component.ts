import { Component, OnInit } from '@angular/core';
import{ProductosService} from '../../../../service/productos.service'
import{Route}from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  ProductList:any[]=[];
  constructor(private ProductosSvc:ProductosService) { 
    this.ProductosSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    });
  }
 

  ngOnInit(): void {
  }

}
