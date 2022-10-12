var logger = /** @class */ (function () {
    function logger() {
    }
    logger.prototype.logRandomNumber = function () {
        Math.floor(Math.random() * 101);
        console.log(this.logRandomNumber);
    };
    logger.prototype.logARandomColor = function () {
    };
    logger.prototype.logTo100 = function () {
    };
    return logger;
}());
new logger;
