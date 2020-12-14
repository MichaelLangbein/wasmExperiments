typedef struct Player {
    int number;
    int speed;
    int strength;
} Player;

typedef struct Team {
    Player players[11];
} Team;

int calculateTeamStrength (Team* team);