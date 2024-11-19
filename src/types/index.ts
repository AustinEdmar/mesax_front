export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    profile_photo: string;
    access_level: number;
    
  }
export interface UserData {
    
    name?: string;
    email?: string;
    access_level?: number;
    
  }


  // src/types/index.ts

export interface Table {
  id: number; 
  number: number;
  status: 'available' | 'reserved' | 'busy';
}

export interface Categoria {
  id: number;
  nome: string;
  sub_categorias: SubCategoria[];
}

export interface SubCategoria {
  id: number;
  nome: string;
  categoria_id: number;
}

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  sub_categoria_id: number;
  stock: Stock;
}

export interface Stock {
  id: number;
  quantidade: number;
  produto_id: number;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export interface Pedido {
  id: number;
  mesa_id: number;
  user_id: number;
  status: 'pendente' | 'preparando' | 'pronto' | 'entregue' | 'cancelado';
  subtotal: number;
  iva: number;
  total: number;
  items: PedidoItem[];
}

export interface PedidoItem {
  id: number;
  pedido_id: number;
  produto_id: number;
  quantidade: number;
  preco_unitario: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}