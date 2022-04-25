import { GameSymbol } from "./state";

interface ICoordinates {
    x: number;
    y: number;
}

export class Game {
    currentPlayer: GameSymbol;

    constructor() {
        this.currentPlayer = GameSymbol.X;
    }

    currentPlayerPutSymbol(_param: ICoordinates) {}
}
