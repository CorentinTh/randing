const randing = require('./..');

const alphabet = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    figures: '0123456789',
    special: '+-*/={}[]|@!:.,?<>'
};

const specialReg = alphabet.special.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&');

const random = (max) => Math.floor(Math.random() * max);

const regexContainOnly = (alphabets) => {
    let cumulator = '';
    for (const alphabet of alphabets) {
        cumulator += alphabet.replace(/[.*\-+?^${}()|[\]\\]/g, '\\$&');
    }

    return new RegExp(`^[${cumulator}]*$`);
};

const regexNotContain = (alphabets) => {
    let cumulator = '';
    for (const alphabet of alphabets) {
        cumulator += alphabet.replace(/[.*\-+?^${}()|[\]\\]/g, '\\$&');
    }

    return new RegExp(`^.*[${cumulator}]+.*$`);
};

describe('default values', () => {

    for (let i = 0; i < 50; ++i) {
        const token = randing();

        describe(`token ${token}`, () => {


            test('token is a 40 character long', () => {
                expect(token).toHaveLength(50);
            });


            test('token is a alpha-num', () => {
                expect(token).toMatch(regexContainOnly([alphabet.uppercase, alphabet.lowercase, alphabet.figures]));
            });

            test('token doesn\'t have special char', () => {
                expect(token).not.toMatch(regexNotContain([alphabet.special]));
            });


        });

    }

});

describe('fixed length', () => {

    for (let i = 0; i < 50; ++i) {
        const length = random(100);
        const token = randing(length);

        describe(`length ${length} token ${token}`, () => {


            test('token is a 40 character long', () => {
                expect(token).toHaveLength(length);
            });


            test('token is a alpha-num', () => {
                expect(token).toMatch(new RegExp(`^[${alphabet.lowercase + alphabet.uppercase + alphabet.figures}]*$`));
            });

            test('token doesn\'t have special char', () => {
                expect(token).not.toMatch(new RegExp(`^.*[${specialReg}]+.*$`));
            });


        });

    }

});

describe('custom config', () => {

    for (let i = 0; i < 50; ++i) {


        const configs = [];

        for (let i = 0; i < 16; i++) {
            const b = i;
            const config = {
                lowercase: b % 2 === 1,
                uppercase: (b / 2) % 2 === 1,
                figures: (b / 2) % 2 === 1,
                special: (b / 2) % 2 === 1,
            };

            const alphas = Object.entries(config).map(a => a[1] ? alphabet[a[0]] : '');
            const label = Object.entries(config).map(a => a[0] + ' ' + a[1]).join(', ');

            configs.push({
                config,
                label,
                match: alphas.filter(a => a !== ''),
                dontMatch: alphas.filter(a => a === ''),
            })
        }

        for (const config of configs) {
            describe(`custom params: ${config.label}`, () => {
                const token = randing(60, config.config);

                test(`have proper char`, () => {
                    expect(token).toMatch(regexContainOnly(config.match));
                });

                test(`doesn't have excluded char`, () => {
                    expect(token).not.toMatch(regexNotContain(config.dontMatch));
                });
            });
        }

    }

    describe('custom alphabet', () => {

        test('same char', () => {
            const alphabet = 'a';
            const length = 60;
            const token = randing(length, {alphabet});

            expect(token).toBe(alphabet.repeat(length));
        });

        test('fixed alphabet', () => {
            const alphabet = '564sfa';
            const length = 60;
            const token = randing(length, {alphabet});

            expect(token).toMatch(regexContainOnly([alphabet]));
        });
    });
});


describe('misuse', () => {
    describe('wrong length type', () => {
        const lengths = [
            {label: 'string', value: 'yes'},
            {label: 'object', value: {a: 1}},
            {
                label: 'function', value: () => {
                }
            },
            {label: 'boolean:true', value: true},
            {label: 'boolean:false', value: false},
        ];

        for (const length of lengths) {

            test(`${length.label} instead of number`, () => {

                expect(() => randing(length.value)).toThrowError();

            });

        }
    });

    describe('wrong config type', () => {
        const configs = [
            {label: 'string', value: 'yes'},
            {label: 'number', value: 42},
            {
                label: 'function', value: () => {
                }
            },
            {label: 'boolean:true', value: true},
            {label: 'boolean:false', value: false},
        ];

        for (const config of configs) {

            test(`${config.label} instead of number`, () => {

                expect(() => randing(10, config.value)).toThrowError();

            });

        }
    });
});



