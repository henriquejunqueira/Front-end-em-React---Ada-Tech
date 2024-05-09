import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { RootReducer } from '../../redux/root-reducer';
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart-slice';
import { Product } from '../../data/products';

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.Strong>{product.title}</S.Strong> - ${product.price}
            <S.ButtonRemoveItemCart
              onClick={() => dispatch(removeProduct(product))}
            >
              Remover
            </S.ButtonRemoveItemCart>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal data-testid="total">Total: ${total.toFixed(2)}</S.CartTotal>
    </S.Container>
  );
};
