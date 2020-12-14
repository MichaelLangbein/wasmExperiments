#include "arrays.h"

int add (int a, int b) {
    return a*a + b;
}

float arraySum (float* array, int length) {
    float total = 0; 
    for (int i = 0; i < length; i++) {
        total += array[i];
    }
    return total;
}

void arrayAddition (float* arr1, float* arr2, float* arrSum, int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        arrSum[i] = arr1[i] + arr2[i];
    }
}

void execCallback (int i) {
    callbackFunc(i + 1);
}