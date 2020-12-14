WARNINGS = -Wall -Wextra


soccer.o: soccer.h soccer.c
	gcc -c $(WARNINGS) soccer.c

main.o: main.c soccer.h
	gcc -c $(WARNINGS) main.c

main: main.o soccer.o
	gcc -g -o main main.o soccer.o

clean:
	rm *.o

all: main clean







# # Based on https://aransentin.github.io/cwasm/

# # FLAGS = --target=wasm32 -O3 -flto -nostdlib -Wl,--no-entry -Wl,--export-all -Wl,--allow-undefined -Wl,--lto-O3
# CompileFlags = -cc1 -O3 -emit-llvm-bc -triple=wasm32-unknown-unknown-wasm -std=c11 -fvisibility hidden
# LinkFlags = --no-entry --export-all --import-memory


# floatLib.bc: floatLib.h floatLib.c


# helper.bc: helper.h helper.c
# 	clang $(CompileFlags) helper.c

# main.bc: main.c helper.h
# 	clang $(CompileFlags) main.c

# main: main.bc helper.bc
# 	# link bitcode
# 	llvm-link main.bc helper.bc -o allFiles.bc
# 	# optimize
# 	opt -O3 allFiles.bc -o allFiles.bc
# 	# compile
# 	llc -O3 -filetype=obj allFiles.bc -o allFiles.o
# 	# link
# 	wasm-ld allFiles.o -o main.wasm $(LinkFlags)

# clean:
# 	rm *.bc
# 	rm *.o

# all: main clean




