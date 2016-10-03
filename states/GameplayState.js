var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LGS;
(function (LGS) {
    var GameplayState = (function (_super) {
        __extends(GameplayState, _super);
        function GameplayState() {
            _super.call(this);
        }
        GameplayState.prototype.create = function () {
        };
        return GameplayState;
    }(Phaser.State));
    LGS.GameplayState = GameplayState;
})(LGS || (LGS = {}));
//# sourceMappingURL=GameplayState.js.map