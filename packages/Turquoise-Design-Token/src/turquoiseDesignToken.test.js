import token from './turquoiseDesignToken';

describe('turquoiseDesignToken', () => {
    test('test', () => {
        const result = token;
        expect(result).toStrictEqual({
            "typography": {
                "font_family": {
                    "stack_1": "Helvetica, sans-serif",
                },
            },
        });
    })
})