

int add (int a, int b) {
    return a*a + b;
}

float int_arraySum (int* array, int length) {
    float total = 0; 
    for (int i = 0; i < length; i++) {
        total += array[i];
    }
    return total;
}

void int_arrayAddition (int* arr1, int* arr2, int* arrSum, int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        arrSum[i] = arr1[i] + arr2[i];
    }
}

float float_arraySum (float* array, int length) {
    float total = 0; 
    for (int i = 0; i < length; i++) {
        total += array[i];
    }
    return total;
}

void float_arrayAddition (float* arr1, float* arr2, float* arrSum, int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        arrSum[i] = arr1[i] + arr2[i];
    }
}


extern void callbackFunc(int i);


void execCallback (int i) {
    callbackFunc(i + 1);
}