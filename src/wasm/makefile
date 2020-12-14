# Based on https://aransentin.github.io/cwasm/

# FLAGS = --target=wasm32 -O3 -flto -nostdlib -Wl,--no-entry -Wl,--export-all -Wl,--allow-undefined -Wl,--lto-O3
CompileFlags = -cc1 -O3 -emit-llvm-bc -triple=wasm32-unknown-unknown-wasm -std=c11 -fvisibility hidden
LinkFlags = --no-entry --export-all --allow-undefined


arrays.bc: arrays.h arrays.c
	clang $(CompileFlags) arrays.c

soccer.bc: soccer.h soccer.c
	clang $(CompileFlags) soccer.c

main.bc: main.c soccer.h arrays.h
	clang $(CompileFlags) main.c

bundle: main.bc soccer.bc arrays.bc
	llvm-link main.bc soccer.bc arrays.bc -o bundle.bc
	opt -O3 bundle.bc -o bundle.bc
	llc -O3 -filetype=obj bundle.bc -o bundle.o
	wasm-ld bundle.o -o bundle.wasm $(LinkFlags)

deploy: bundle
	mv bundle.wasm ../../

clean:
	rm *.bc
	rm *.o

all: bundle deploy clean

