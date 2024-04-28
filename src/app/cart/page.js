import Hello from "./hello";

export default function Cart() {
  return (
    <div>
      <Hello />
      <h2 className="title">Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
