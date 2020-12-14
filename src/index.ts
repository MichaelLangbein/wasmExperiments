console.log('hi')

const memory = new WebAssembly.Memory({
    initial: 100, // in pages (64KiB / Page)
    maximum: 1000
});


WebAssembly.instantiateStreaming(fetch('./bundle.wasm'), {
            env: {
                memory: memory,
                callbackFunc: function (i: number) {
                    console.log(`Callback called with ${i}`);
                }
            }
        })
    .then((response) => {
    console.log(response);

    const exports = response.instance.exports as any;

    // simple function
    const result1 = exports.add(4, 1);
    console.log(`4**2 + 1`, result1);



    // pointer to top of memory array
    let offsetBytes = 0;
    const memBuf = memory.buffer;



    // wasm accesses js data
    const data1 = [1, 2, 3, 4.4, 5];
    const arr1 = new Float32Array(memBuf, offsetBytes, data1.length);
    arr1.set(data1);
    offsetBytes += arr1.length * arr1.BYTES_PER_ELEMENT;
    
    const result2 = exports.arraySum(arr1.byteOffset, arr1.length);
    console.log(`sum of (${arr1})`, result2);




    // js accesses wasm data
    const l = 3;

    const data2 = [1, 2, 3.1];
    const arr2 = new Float32Array(memBuf, offsetBytes, l);
    arr2.set(data2);
    offsetBytes += arr2.length * arr2.BYTES_PER_ELEMENT;

    const data3 = [4, 5.1, 6];
    const arr3 = new Float32Array(memBuf, offsetBytes, l);
    arr3.set(data3);
    offsetBytes += arr3.length * arr3.BYTES_PER_ELEMENT;

    const arr4 = new Float32Array(memBuf, offsetBytes, l);
    offsetBytes += arr4.length * arr4.BYTES_PER_ELEMENT;

    exports.arrayAddition(arr2.byteOffset, arr3.byteOffset, arr4.byteOffset, l);
    console.log(`addition of ${arr2} and ${arr3} = `, arr4)
    

    exports.execCallback(5);


    const strength = exports.calculateBarcelonaStrength();
    console.log('Barcelona: ', strength);
});