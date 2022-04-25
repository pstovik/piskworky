import { GameSymbol } from "./state";

export class Game {
    nextPlayerSymbol: GameSymbol;

    constructor() {
        this.nextPlayerSymbol = GameSymbol.O;
    }
}
