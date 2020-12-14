#include <stdio.h>
#include "soccer.h"


int main() {
    Player p1 = {1, 10, 5};
    Player p2 = {2, 8, 8};
    Player p3 = {3, 5, 10};

    Team t = {{p1, p2, p3}};

    int totalStrength = calculateTeamStrength(&t);
    printf("The team-stength is %i \n", totalStrength);

    return 0;
}

