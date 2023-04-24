import type Products from "../product/types";

import Papa from "papaparse";

async function getProducts() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgOc-IreooFQ7M5OVe5NCzaOaNr8H2AvzPQJXwjZhFhqmqNrovUbSjCaYjTcWccbPE3LDSK8YcwuT6/pub?output=csv",
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await response.text();

  return await new Promise<Products[]>((resolve, reject) => {
    Papa.parse<Products>(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
}

export default getProducts;
