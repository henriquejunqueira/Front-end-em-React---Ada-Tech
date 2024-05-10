import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { login, logout } from '../../redux/User/user-slice';
import { Cart } from '../Cart/Cart';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import * as S from './styles'; // ! Todos os componentes com S. na frente do nome do componente é um componente estilizado

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const [showcart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    // ! usuário não está logado
    if (user === null) {
      // ! despachar a action de login
      dispatch(
        login({
          name: 'Henrique Junqueira',
          email: 'teste@teste.com',
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>Shopping</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showcart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showcart} cart={cart} />
    </S.StyledHeader>
  );
};
