import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtosService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      );
  }
}