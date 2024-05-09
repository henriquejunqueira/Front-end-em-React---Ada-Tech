import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';
import { products } from '../../data/products';
// import { useDispatch, useSelector } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { removeProduct } from '../../redux/Cart/cart-slice';

const cart = products.slice(0, 2); // obtendo os dois primeiros produtos do array

const mockDispatch = jest.fn(); // ! função mockada (função fake)

// TODO Mock (tornar algo fake): nesse caso, tornar a biblioteca react-redux fake (deixa funcionar, mas não faz nada)
jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
    // useSelector: () => {
    //   return {
    //     cart: []
    //     cart: products,
    //     user: {},
    //   };
    // },
  };
});

describe('Cart > Unit tests', () => {
  it('should render an empty cart correctly', () => {
    render(<Cart showCart={false} cart={[]} />); // ! showCart={false} indica se o componente deve ser mostrado ou não no navegador

    const titleElement = screen.getByRole('heading', { level: 1 });
    const totalElement = screen.getByTestId('total');
    const cartListElement = screen.getByRole('list'); // ul

    // ! faz o debug de um elemento ou a tela inteira, no caso abaixo faz o debug do cartListElement e mostra o que tem no elemento
    // screen.debug(cartListElement);
    // screen.debug(totalElement);

    expect(titleElement).toHaveTextContent('Carrinho');
    expect(totalElement).toHaveTextContent('$0');
    expect(cartListElement).toBeEmptyDOMElement(); // ! verifica se o elemento está vazio
  });

  it('should render a cart with two products', () => {
    render(<Cart showCart={true} cart={cart} />);

    // ! getAllByRole retorna um array de elementos
    const productsItemElements = screen.getAllByRole('listitem'); // li
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    // screen.debug(firstProductTitleElement);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it('should remove product when remove button is clicked', () => {
    render(<Cart showCart={true} cart={[products[0]]} />);

    const removeProductButton = screen.getByRole('button', { name: 'Remover' });

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled(); // ! verifica se a função foi chamada
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0])); // ! verifica com quais parâmetros a função foi chamada
  });
});
