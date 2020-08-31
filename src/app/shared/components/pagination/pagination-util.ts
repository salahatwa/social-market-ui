export function getValueInRange(value: number, max: number, min = 0): number {
    return Math.max(Math.min(value, max), min);
}

export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}


export function isString(value: any): value is string {
    return typeof value === 'string';
}

export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
}