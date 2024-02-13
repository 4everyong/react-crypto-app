import { cryptoAssets, cryptoData } from "./data";

export function fakeFechCrypto(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2)
    })
}

export function fechAccets(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2)
    })
}