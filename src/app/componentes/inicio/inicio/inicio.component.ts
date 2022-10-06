import { Component, OnInit } from '@angular/core';
import{ProductosService} from '../../../../service/productos.service'
import{Route}from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
