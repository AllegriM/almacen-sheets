"use client";
import type Products from "@/app/product/types";

import Image from "next/image";
import React from "react";

import Button from "./Button";
import SendWhatsapp from "./SendWhatsapp";

interface ProductsProps {
  products: Products[];
}

export default function Products({products}: ProductsProps) {
  const [cart, setCart] = React.useState<Products[]>([]);

  const addItemToCart = (product: Products) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {...item, orderAmount: item.orderAmount + 1};
        }

        return item;
      });

      return setCart(newCart);
    }

    return setCart([...cart, product]);
  };

  return (
    <div className="p-4 shadow-xl max-w-sm md:max-w-4xl bg-white rounded-lg mx-auto">
      <ul className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        {products.map((product) => {
          const precio = Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          });

          return (
            <li key={product.id} className="flex flex-col items-center border rounded-lg w-60">
              <Image
                alt={product.nombre}
                className="h-28 object-contain"
                height={100}
                src={product.imagen}
                width={100}
              />
              <article className="bg-neutral-100 w-full text-center rounded-b-lg py-2">
                <h3 className="text-2xl font-bold">{product.nombre}</h3>
                <p className="capitalize text-left pl-4">Categoria: {product.categoria}</p>
                <p className="text-left pl-4">Precio: {precio.format(Number(product.precio))}</p>
                <p className="text-left pl-4">Cantidad: {product.cantidad}</p>
                <Button
                  clickAction={() => addItemToCart({...product, orderAmount: 1})}
                  styles="bg-blue-500 text-white p-2 rounded my-2"
                  type="button"
                >
                  Agregar al carrito
                </Button>
              </article>
            </li>
          );
        })}
      </ul>
      {cart.length ? (
        <div className="flex justify-center my-4">
          <SendWhatsapp products={cart} />
        </div>
      ) : null}
    </div>
  );
}
