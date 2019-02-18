# signnow-promise
Converts signnow node sdk callback pattern to return promises.

# signnow vs signnow-promise

## signnow
```javascript
signnow.user.create({
    first_name: 'John',
    last_name: 'Wayne',
    email:'john@domain.com',
    password:'yourpwd'
}, function(err, res) {
    if (!err) {
        console.log(`RESULTS: ${res}`);
    } else {
        console.log(`ERROR: ${err}`);
    }
});
```

## signnow-promise

### async/await
```javascript
try {
    const res = await signnow.user.create({
        first_name: 'John',
        last_name: 'Wayne',
        email:'john@domain.com',
        password:'yourpwd'
    });
    console.log(`RESULTS: ${res}`);
} catch (err) {
    console.log(`ERROR: ${err}`);
}
```

### then/catch
```javascript
signnow.user.create({
    first_name: 'John',
    last_name: 'Wayne',
    email:'john@domain.com',
    password:'yourpwd'
}).then(res => {
    console.log(`RESULTS: ${res}`);
}).catch(err => {
    console.log(`ERROR: ${err}`);
});
```

# Install
`npm install signnow-promise`

# Usage

```javascript
const signnow = require('signnow-promise')({
    credentials: 'ENCODED_CLIENT_CREDENTIALS',
    production: false
});
```

To see full usage documentation, see the [README.md](https://github.com/signnow/SignNowNodeSDK/blob/master/README.md) for signnow.
