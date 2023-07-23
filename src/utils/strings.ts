export const toTitleCase = (strArr: string[]) => strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
