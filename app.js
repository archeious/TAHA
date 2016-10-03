var Game;
(function (Game) {
    var WordWall = (function () {
        function WordWall() {
            this.game = new Phaser.Game(1280, 800, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        WordWall.prototype.preload = function () {
            this.game.load.image('title', "/assets/graphics/space.jpg");
        };
        WordWall.prototype.create = function () {
            this.game.state.add("TitleScreenState", LGS.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return WordWall;
    }());
    Game.WordWall = WordWall;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.WordWall();
};
//# sourceMappingURL=app.js.map