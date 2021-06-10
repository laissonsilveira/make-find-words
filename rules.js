const ruleStartsWith = (letters, start) => word => {
    if (start) return word?.toLowerCase().startsWith(start?.toLowerCase());
    return true;
};
const ruleEndsWith = (letters, start, end) => word => {
    if (end) return word?.toLowerCase().endsWith(end?.toLowerCase());
    return true;
};
const rulesContainsLetters = (letters, start, end, minContains) => {
    return word => {
        if (!minContains) return true;
        let contains = 0;
        for (const letter of letters) {
            if (word?.toLowerCase().includes(letter?.toLowerCase()))
                contains++
        }
        return contains >= minContains;
    }
};

module.exports = [ruleStartsWith, ruleEndsWith, rulesContainsLetters];