#include "soccer.h"


int calculateTeamStrength (Team* team) {
    int teamStrength = 0;
    for (int i = 0; i < 11; i++) {
        teamStrength += (*team).players[i].strength;
    }
    return teamStrength;
}