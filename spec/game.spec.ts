import { Game } from "../src/game";
import { GameSymbol } from "../src/state";

describe("game::", () => {
    describe("given first turn", () => {
        it("should be played by 'X' player", () => {
            const game = new Game();
            expect(game.currentPlayer).toBe(GameSymbol.X);
        });
    });

    describe("given second turn", () => {
        it("should be played by 'O' player", () => {
            const game = new Game();
            game.currentPlayerPutSymbol({ x: 0, y: 0 });
            expect(game.currentPlayer).toBe(GameSymbol.O);
        });
    });
});
