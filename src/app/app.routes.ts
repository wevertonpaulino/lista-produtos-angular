import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutosComponent } from "./produtos/lista-produtos/lista-produtos.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'produtos-detalhe/:id', component: ListaProdutosComponent },
];