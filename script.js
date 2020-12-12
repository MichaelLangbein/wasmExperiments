

WebAssembly.instantiateStreaming(fetch('prog.wasm')).then((response) => {
    console.log(response);

    const result = response.instance.exports.add(4, 1);

    console.log(result);
});