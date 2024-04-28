export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {products.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
