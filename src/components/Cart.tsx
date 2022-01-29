import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

export function Cart() {
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

    console.log(cart);

    return (
        <table> 
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Sub-Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                {
                                    Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: 'BRL'
                                    }).format(item.product.price)
                                }
                            </td>
                            <td>
                                {
                                    Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: 'BRL'
                                    }).format(item.product.price * item.quantity)
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}