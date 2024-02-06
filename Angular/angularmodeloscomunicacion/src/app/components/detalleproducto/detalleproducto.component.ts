import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  public producto!: Producto;
 public productos: Array<Producto>;

  constructor(private route: ActivatedRoute) {
    this.productos = [
      new Producto(
        "Nike Air Jordan",
        "https://i.ebayimg.com/images/g/lEsAAOSwBJpc1MAN/s-l300.jpg",
        150
      ),
      new Producto(
        "New Balance 1530",
        "https://cdn.webshopapp.com/shops/164432/files/292835943/new-balance-m1530kgl-olive-grey-pink-made-in-uk.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Vans",
        "https://media.vogue.es/photos/5cc75028fdc822a6611ff5bb/master/w_2700,c_limit/voguees_moda_tendencias_250218163.jpg",
        75
      )
    ]
  }

  ngOnInit(): void {
    // Obtén el índice de la ruta
    const indice = this.route.snapshot.paramMap.get('num');
    
    // Verifica que el índice es un número válido
    if (indice !== null && !isNaN(+indice)) {
      // Convierte el índice a un número y obtén el producto correspondiente
      const indiceNumerico = +indice;
      // Accede a tu arreglo de productos para obtener el producto en el índice dado
      // Asumiendo que tienes una variable de clase 'productos' que contiene tu array
      // Asegúrate de inicializar 'productos' en tu componente
      this.producto = this.productos[indiceNumerico];
    } else {
      // Manejo de error: el índice no es un número válido
      console.error('Índice no válido');
      // Puedes redirigir o manejar el error de alguna otra manera aquí
    }
  }
}
