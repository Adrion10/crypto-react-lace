import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("€");

  useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};

export default CryptoContext;
