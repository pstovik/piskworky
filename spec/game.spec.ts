import { Game } from "../src/game";
import { GameSymbol } from "../src/state";

describe("game::", () => {
    describe("given first turn", () => {
        it("should be played by 'X' player", () => {
            const game = new Game();
            expect(game.nextPlayerSymbol).toBe(GameSymbol.X);
        });
    });
});
