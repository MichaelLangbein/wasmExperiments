#include <emscripten/emscripten.h>


EMSCRIPTEN_KEEPALIVE 
int fibonacci (int i) {
    if (i < 2) {
        return i;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}