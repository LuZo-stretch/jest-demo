const sum = (a, b) => a + b;

describe('sum function', () => {
    it('adds two numbers', () => {
        const expected =3;
        const actual = sum(1, 2);
        expect(actual).toBe(expected);
    })

    it('deals with negative numbers', () => {
        const expected = 5;
        const actual = sum(10, -5);
        expect(actual).toBe(expected);
    })
})

const multiply = (a, b) => a * b;

describe('multiply function', () => {
    it('multiplies two numbers', () => {
        const expected = 8;
        const actual = multiply(2, 4);
        expect(actual).toBe(expected);
    })

    it('deals with one negative number', () => {
        const expected = -10;
        const actual = multiply(5, -2);
        expect(actual).toBe(expected);
    })

    it('deals with two negative numbers', () => {
        const expected = 10;
        const actual = multiply(-5, -2);
        expect(actual).toBe(expected);
    })
})