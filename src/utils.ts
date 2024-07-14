const capitalizeLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getRandomArrayElement = (items:[]): object => items[Math.floor(Math.random() * items.length)];


export { capitalizeLetter, getRandomArrayElement };
