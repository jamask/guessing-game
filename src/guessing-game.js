class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guessNumber = 0;
    }

    guess() {
        let guesss = this.min + Math.round((this.max - this.min) / 2);
        this.guessNumber = guesss
        return guesss;
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
