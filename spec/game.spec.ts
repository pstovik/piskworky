import { Game } from "../src/game";
import { GameSymbol } from "../src/state";

describe("game::", () => {
    describe("given first turn", () => {
        it("should be played by 'X' player", () => {
            const game = new Game();
            expect(game.currentPlayer).toBe(GameSymbol.X);
            expect(game.gameWinner).not.toBeDefined();
        });
    });

    describe("given second turn", () => {
        it("should be played by 'O' player", () => {
            const game = new Game();
            game.currentPlayerPutSymbol({ x: 0, y: 0 });
            expect(game.currentPlayer).toBe(GameSymbol.O);
        });
    });

    describe("given 6 symbols placed", () => {
        it("next move should be played by 'X' player", () => {
            const game = new Game();
            playComplexGame(game);
            expect(game.currentPlayer).toBe(GameSymbol.X);
        });
    });

    describe("given 'X' made 3 symbols in vertical line", () => {
        it("should mark game as won by 'X'", () => {
            const game = new Game();
            playComplexGame(game);
            expect(game.gameWinner).toBe(GameSymbol.O);
        });
    });
});

function playComplexGame(game: Game) {
    game.currentPlayerPutSymbol({ x: 0, y: 0 }); // X
    game.currentPlayerPutSymbol({ x: 1, y: 1 }); // O
    game.currentPlayerPutSymbol({ x: 0, y: 1 }); // X
    game.currentPlayerPutSymbol({ x: 1, y: 0 }); // O
    game.currentPlayerPutSymbol({ x: 2, y: 0 }); // X
    game.currentPlayerPutSymbol({ x: 1, y: 2 }); // O
}
