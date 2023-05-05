export const abbreviateNumber = (value: number): string | number => {
    if (value >= 1000 && value < 1000000)
        return parseFloat((value / 1000).toFixed(1)) + "K";

    if (value >= 1000000 && value < 1000000000)
        return parseFloat((value / 1000000).toFixed(1)) + "M";

    if (value >= 1000000000 && value < 1000000000000)
        return parseFloat((value / 1000000000).toFixed(1)) + "B";

    if (value >= 1000000000000)
        return parseFloat((value / 1000000000000).toFixed(1)) + "T";

    return value;
};

export const convertBacktickToCodeTag = (input: string): string =>
    input.replace(/`(.*)`/, "<code>$1</code>");

export const randomBetween = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
