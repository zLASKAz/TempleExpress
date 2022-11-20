export default class RandomLuck {
    constructor() {
        this.cardList = {};
        this.value = 0;
        this.mainStat;
        this.subStats = {};
        this.cardMeaning;
        this.maxValue = 1108;
    };

    choose(number) {
        this.generateCard();
        var selectedCardType = this.cardList[number];
        this.createLuckValue();
        this.calcLuckValue(selectedCardType);
        this.cardMeaning = this.cardName();
        return selectedCardType;
    };

    cardName() {
        var text = [];
        switch (this.mainStat) {
            case "HP":
                text[0] = "Regeneration";
                text[1] = "Umbrabilis Orchis";
                text[2] = "A lifely day with passionate. Although any obstacle was came, one can passionately handle that damage and go through with a numberous of vitality.";
                break;
            case "ATK":
                text[0] = "Strength";
                text[1] = "Crista Doloris";
                text[2] = "A warrior from the ancient time, can pierce the darkness and despairation for a must-protected ones.";
                break;
            case "DEF":
                text[0] = "Resistance";
                text[1] = "Taurus Iracundus";
                text[2] = "A tough day but not fragile. Received a too very least damage to not feel anything even though there was a huge obstacle confronted.";
                break;
            case "ER":
                text[0] = "Energy";
                text[1] = "Imperatrix Umbrosa";
                text[2] = "The World Refresher, the never-run-out energy core that nourish The World and manifest a countless times of surprisingly miracle to every universe."
                break;
            case "EM":
                text[0] = "Element";
                text[1] = "Sapientia Oromasdis";
                text[2] = "'Imagination is more important than knowledge'. For knowledge is limited to what is currently know and understand, whereas imagination encompasses the entire world and everything there will ever be to know and understand. However both knowledge and imagination are still important, that is, the true wisdom.";
                break;
        };
        return text;
    };

    result() {
        var text = "No result";
        if (this.value > 900)
            text = "You have a super duper very good luck day!!!";
        else if (this.value > 500)
            text = "Your today luck is very good.";
        else if (this.value > 100) {
            text = "The perfect equality of fate.";
        }
        else {
            text = "This day may be tough for you. Keep fighting!";
        };
        return text;
    };

    createLuckValue() {
        this.mainStat = randomStringInArray(["HP", "ATK", "DEF", "ER", "EM"], [26.68, 26.66, 26.66, 10.0, 10.0]);
        var availSubStats;
        var chance;
        switch (this.mainStat) {
            case "HP":
                availSubStats = ["fHP", "fATK", "fDEF", "ATK", "DEF", "ER", "EM", "CR", "CD"];
                chance = [15.0, 15.0, 15.0, 10.0, 10.0, 10.0, 10.0, 7.5, 7.5];
                break;
            case "ATK":
                availSubStats = ["fHP", "fATK", "fDEF", "HP", "DEF", "ER", "EM", "CR", "CD"];
                chance = [15.0, 15.0, 15.0, 10.0, 10.0, 10.0, 10.0, 7.5, 7.5];
                break;
            case "DEF":
                availSubStats = ["fHP", "fATK", "fDEF", "HP", "ATK", "ER", "EM", "CR", "CD"];
                chance = [15.0, 15.0, 15.0, 10.0, 10.0, 10.0, 10.0, 7.5, 7.5];
                break;
            case "ER":
                availSubStats = ["fHP", "fATK", "fDEF", "HP", "ATK", "DEF", "EM", "CR", "CD"];
                chance = [15.0, 15.0, 15.0, 10.0, 10.0, 10.0, 10.0, 7.5, 7.5];
                break;
            case "EM":
                availSubStats = ["fHP", "fATK", "fDEF", "HP", "ATK", "DEF", "ER", "CR", "CD"];
                chance = [15.0, 15.0, 15.0, 10.0, 10.0, 10.0, 10.0, 7.5, 7.5];
                break;
        };
        let hit = randomNumber(1, 5);
        var initialSlot = 4;
        var initialUpgrade = 5;
        if (hit != 4) {
            initialUpgrade -= 1;
        };
        while (initialSlot > 0) {

            var randSubStat = randomStringInArray(availSubStats, chance);

            if (randSubStat in this.subStats) {
                continue;
            }

            this.subStats[randSubStat] = subStatsUpgrade(randSubStat);
            initialSlot--;
        };
        for (let i = initialUpgrade; i > 0; i--) {

            var getUpgrade = randomStringInArray(Object.keys(this.subStats));
            var upgradeValue = subStatsUpgrade(getUpgrade);


            this.subStats[getUpgrade] = Math.round(parseFloat(this.subStats[getUpgrade] + upgradeValue) * 100) / 100;
        };

    };

    calcLuckValue(cardType) {
        if (this.mainStat === cardType) {
            this.value += 100;
        };
        for (let stats of Object.keys(this.subStats)) {
            switch (stats) {
                case "fHP":
                    if (cardType === "HP")
                        this.value = parseInt(this.value + (this.subStats[stats] * 0.07));
                    break;
                case "fATK":
                    if (cardType === "ATK")
                        this.value = parseInt(this.value + (this.subStats[stats] * 1.15));
                    break;
                case "fDEF":
                    if (cardType === "DEF")
                        this.value = parseInt(this.value + (this.subStats[stats] * 0.93));
                    break;
                case "HP":
                case "ATK":
                    if ((cardType === "HP") || (cardType === "ATK"))
                        this.value = parseInt(this.value + (this.subStats[stats] * 7.5));
                    else
                        this.value = parseInt(this.value + (this.subStats[stats] * 3.7));
                    break;
                case "DEF":
                    if (cardType === "DEF")
                        this.value = parseInt(this.value + (this.subStats[stats] * 6.1));
                    else
                        this.value = parseInt(this.value + (this.subStats[stats] * 2.9));
                    break;
                case "EM":
                    if (cardType === "EM")
                        this.value = parseInt(this.value + (this.subStats[stats] * 3.1));
                    else
                        this.value = parseInt(this.value + (this.subStats[stats] * 1.2));
                    break;
                case "ER":
                    if (cardType === "ER")
                        this.value = parseInt(this.value + (this.subStats[stats] * 12.5));
                    else
                        this.value = parseInt(this.value + (this.subStats[stats] * 5.1));
                    break;
                case "CR":
                    this.value = parseInt(this.value + (this.subStats[stats] * 36.76));
                    break;
                case "CD":
                    this.value = parseInt(this.value + (this.subStats[stats] * 18.38));
                    break;
            };
        };
    };

    generateCard() {
        let cardType = ["ATK", "HP", "DEF"];
        for (let i = 0; i < 3; i++) {
            let temp = randomStringInArray(cardType);
            this.cardList[i] = temp;
        };
    };

};

function subStatsUpgrade(stats) {
    var subStatsValue;
    switch (stats) {
        case "fHP": subStatsValue = parseFloat(randomStringInArray(["209.13", "239.0", "268.88", "298.75"])); break;
        case "fATK": subStatsValue = parseFloat(randomStringInArray(["13.62", "15.56", "17.51", "19.45"])); break;
        case "fDEF": subStatsValue = parseFloat(randomStringInArray(["16.2", "18.52", "20.83", "23.15"])); break;
        case "HP": case "ATK": subStatsValue = parseFloat(randomStringInArray(["4.08", "4.66", "5.25", "5.83"])); break;
        case "DEF": subStatsValue = parseFloat(randomStringInArray(["5.1", "5.83", "6.56", "7.29"])); break;
        case "EM": subStatsValue = parseFloat(randomStringInArray(["16.32", "18.65", "20.98", "23.31"])); break;
        case "ER": subStatsValue = parseFloat(randomStringInArray(["4.53", "5.18", "5.83", "6.48"])); break;
        case "CR": subStatsValue = parseFloat(randomStringInArray(["2.72", "3.11", "3.5", "3.89"])); break;
        case "CD": subStatsValue = parseFloat(randomStringInArray(["5.44", "6.22", "6.99", "7.77"])); break;
    };
    return subStatsValue;
};

function randomStringInArray(array, weight = []) {
    if (weight.length != 0) {
        let totalWeight = 0.0;
        for (let w of weight) {
            totalWeight += w;
        };
        var idx = 0;
        for (let r = Math.random() * totalWeight; idx < array.length - 1; idx++) {
            r -= weight[idx];
            if (r <= 0.0) break;
        };
        return array[idx];
    } else {
        return array[randomNumber(0, array.length - 1)];
    };
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};