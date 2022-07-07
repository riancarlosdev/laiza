interface infoP {
  id: string;
  title: string;
  price_actual: string;
  price_old: string;
  frete?: boolean;
  qnt_sales: string;
  new?: boolean;
  repository: number;
  images: {
    id: string;
    image?: string;
  }[];
}

export const info_product: infoP = {
  id: '1',
  title: 'Oximetro de Pulso Portatil De Lado Com Curvas Completo Cores',
  price_actual: '125,02',
  price_old: '142,11',
  frete: true,
  qnt_sales: '2',
  new: true,
  repository: 15,
  images: [
    {
      id: '1',
      image: 'https://via.placeholder.com/401x441',
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/402x442',
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/403x443',
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/404x444',
    },
  ],
};
