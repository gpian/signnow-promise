const settings = require('./.signnow/credentials.json');
const signnow = require('../src/index')({
    credentials: settings.eval.credentials,
    production: false
});

it('should be a promise', async () => {
    const promise = signnow.document.create({});
    expect(promise).toBeInstanceOf(Promise);
});
