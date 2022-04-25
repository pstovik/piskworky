import { GameSymbol } from "./state";

interface ICoordinates {
    x: number;
    y: number;
}

export class Game {
    currentPlayer: GameSymbol;
    gameWinner?: GameSymbol;

    constructor() {
        this.currentPlayer = GameSymbol.X;
    }

    currentPlayerPutSymbol(_param: ICoordinates) {
        // this.currentPlayer = GameSymbol.O;
        if (this.currentPlayer === GameSymbol.X) {
            this.currentPlayer = GameSymbol.O;
        } else {
            this.currentPlayer = GameSymbol.X;
        }
        // this.currentPlayer = this.currentPlayer === GameSymbol.X ? GameSymbol.O : GameSymbol.X;

        // TODO: game logic
    }
}
