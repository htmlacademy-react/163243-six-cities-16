const capitalizeLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getRandomArrayElement = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];


export { capitalizeLetter, getRandomArrayElement };
