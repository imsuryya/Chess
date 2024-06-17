// interface Game{
//     id: number;
//     name: string;
//     player1: WebSocket;
//     player2: WebSocket;

import { WebSocket } from "ws";

// }
export class GameManager {
    private games: Game[];
    constructor() {
        this.games = [];
    }

    addUser( socket: WebSocket){

    }
    removeUser( socket: WebSocket){

    }

    private handelMessage(){

    }

}