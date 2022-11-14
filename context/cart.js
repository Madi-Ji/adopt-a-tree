import React, { useState, useEffect } from "react";

const _win = (typeof window !== "undefined") ? window : {}

const localStorage = {
    getItem: (key) => _win?.localStorage?.getItem(key) || new Map(),
    setItem: (key, value) => _win?.localStorage?.setItem(key, value) || arguments
}

const storageName = 'shop_cart'

const storageToMap = () => {
    let storage = localStorage.getItem(storageName)

    if (typeof storage === 'string') {
        storage = JSON.parse(storage)
        storage = new Map(storage)
    }
    return storage;
}

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(new Map());

    useEffect(() => {
        let storage = storageToMap();
        setItems(storage)
    }, [])

    useEffect(() => {
        let storage = storageToMap();
        if (items.size === 0 & storage.size > 0) return;
        localStorage.setItem(storageName, JSON.stringify([...items]))
    }, [items])

    return (
        <CartContext.Provider
            value={{
                items,
                setItem: async ({ id, ...item }) => {
                    setItems(
                        new Map(items.set(id, item))
                    );
                }
            }}
        >
            {children}
        </CartContext.Provider>
    );
};