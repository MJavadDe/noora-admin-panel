import { Product } from "@prisma/client";

async function page() {
    const res = await fetch("https://noora-admin-panel.vercel.app/api/products",{cache:"no-cache"});
    const products: Product[] = await res.json();

  return (
    <table className="table table-xs sm:table-sm text-primary-content">
      <thead>
        <tr className="text-success-content">
          <th>Id</th>
          <th>نام</th>
          <th>قیمت</th>
          <th>موجودی</th>
                  <th>سریال محصول</th>
                  <th>تاریخ اضافه کردن</th>
        </tr>
      </thead>
          <tbody>
              {products.map((product, index) => {
                  const priceInPersian = Intl.NumberFormat("fa-IR", { style: "currency", currency: "IRR" }).format(product.price);
                  const timeInPersian = new Intl.DateTimeFormat("fa-IR", {
                    year: "2-digit",
                    month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                  }).format(new Date(product.enteringTime));                      
                      return (
                       
                          <tr key={product.productSerial}>
                          <td>{index+1}</td>
                          <td>{product.name}</td>
                              <td>{priceInPersian}</td>
                              <td>{product.quantity}</td>
                              <td>{product.productSerial}</td>
                              <td>{timeInPersian}</td>
                              
                      </tr>
                          
                      )
              })}
        </tbody>
      </table>
  );
}

export default page;
