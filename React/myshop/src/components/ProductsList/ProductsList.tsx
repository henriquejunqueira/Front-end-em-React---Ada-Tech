import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../data/products';
import * as S from './styles';

export const ProductsList = () => {
  // ! Dá pra puxar os dados com useEffect da API de produtos
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
