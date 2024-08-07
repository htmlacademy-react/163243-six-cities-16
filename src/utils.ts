export const capitalizeLetter = (initString: string) => initString.charAt(0).toUpperCase() + initString.slice(1);

export const getRandomArrayElement = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

