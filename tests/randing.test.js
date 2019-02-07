const randing = require('./..');

const alphabet = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    figures: '0123456789',
    special: '+-*/={}[]|@!:.,?<>',
};


const random = (max) => Math.floor(Math.random() * max);


it('Default token is a 40 character long string', () => {
    const token = randing();

    expect(typeof token).toBe('string');
    expect(token).toHaveLength(50);
});


it('Generate by default 40 character long string', () => {
    expect(randing()).toHaveLength(50);
});