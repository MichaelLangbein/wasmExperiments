console.log("Hi!");

const importObject = {};

fetch('prog.wasm').then((response) => {
    return response.arrayBuffer();
}).then((bytes) => {
    return WebAssembly.instantiate(bytes, importObject);
}).then((wasm) => {
    console.log(wasm);
    console.log(importObject)
});