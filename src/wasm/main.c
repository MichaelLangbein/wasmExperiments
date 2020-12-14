#include "soccer.h"
#include "arrays.h"



int calculateBarcelonaStrength() {
    Player p1 = {1, 10, 5};
    Player p2 = {2, 8, 8};
    Player p3 = {3, 5, 10};

    Team t = {{p1, p2, p3}};

    int totalStrength = calculateTeamStrength(&t);

    return totalStrength;
}

float sumSomeArrays() {
    float a1[3] = {1.1, 2.2, 3.3};
    float a2[3] = {4.4, 5.5, 6.6};
    float aSum[3];
    arrayAddition(a1, a2, aSum, 3);
    float sum = arraySum(aSum, 3);
    return sum;
}