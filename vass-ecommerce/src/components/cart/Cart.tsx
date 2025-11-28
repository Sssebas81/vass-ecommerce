import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { removeFromCart, clearCart, updateQuantity } from "../../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";
// Componente del Carrito de Compras
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
// Calcular subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    const priceSource = item.displayPrice ?? item.price;
    const numericPrice = Number(String(priceSource).replace(/\D/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
        <button
          onClick={() => navigate("/Shop")}
          className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Tabla de productos */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Subtotal</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  // Precio numérico para cálculos (enteros COP)
                  const priceSource = item.displayPrice ?? item.price;
                  const numericPrice = Number(String(priceSource).replace(/\D/g, ""));
                  const subtotalItem = numericPrice * item.quantity;

                  return (
                    <tr key={item.id} className="border-b">
                      <td className="px-4 py-4 flex items-center gap-4">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </td>

                      {/* Mostrar el precio original del JSON si existe */}
                      <td className="px-4 py-4 text-gray-700">
                        {item.displayPrice
                          ? item.displayPrice
                          : numericPrice.toLocaleString("es-CO") + " COP"}
                      </td>

                      {/* Controles de cantidad */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                            }
                            className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="w-12 text-center border border-gray-300 rounded"
                          />
                          <button
                            onClick={() =>
                              dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                            }
                            className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Subtotal por producto */}
                      <td className="px-4 py-4 text-gray-700">
                        {(subtotalItem).toLocaleString("es-CO") + " COP"}
                      </td>

                      {/* Botón eliminar */}
                      <td className="px-4 py-4">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <img
                            src="/img/eliminar.png"
                            alt="Logo de tarro de basura"
                            className="h-6 w-6"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totales */}
        <div className="bg-black text-white rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {cartItems.some(i => i.displayPrice)
                  ? subtotal.toLocaleString("es-CO", { maximumFractionDigits: 0 }) + " COP"
                  : subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>
                {cartItems.some(i => i.displayPrice)
                  ? subtotal.toLocaleString("es-CO", { maximumFractionDigits: 0 }) + " COP"
                  : subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
              </span>
            </div>
          </div>
          <button className="mt-6 w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Checkout
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 w-full py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
          >
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
