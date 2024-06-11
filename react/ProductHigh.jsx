import { useState, useEffect } from "react";
import { useProduct } from "vtex.product-context";

const ProductHigh = () => {
  const [DataCollection1, setDataCollection1] = useState(false);

  const { product } = useProduct();
  useEffect(() => {
    setInterval(() => {
      window.data59.length > 0 ? setDataCollection1(true): null
    },50 );
  }, []);
  // DataCollection1.map((prodc) => {
  //     console.log({data:1, id:prodc.productId, ids:product.productId})
  // })
  // DataCollection2.map((prodc) => {
  //     console.log({data:2, id:prodc.productId, ids:product.productId})
  // })
  return (
    <>
      {DataCollection1 ? (
        <>
          {window?.data59?.map((prodc) => {
            return `${prodc}` == product.productId ? (
              <img
                width={76}
                src="https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/e3c0d9bc-47fc-4cb5-b79a-0c9b0162a6e0___3cda9ff820b5c5346072073edbd38eb1.png"
              />
            ) : null;
          })}
          {window?.data60?.map((prodc) => {
            return `${prodc}` == product.productId ? (
              <img
                width={76}
                src="https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/fd9c1d5b-465f-4efd-af40-5337a73f2cdf___502eb3b25cd243e8995a1d2a66b5eefa.png"
              />
            ) : null;
          })}
        </>
      ) : null}
    </>
  );
};

export default ProductHigh;
