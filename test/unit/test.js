var bosPassport = require('../../');
var strategy = {
    verify:
    {
        service: 'hmacService',
        method: {
            name: 'getApiUser',
            args: [],
            execute: false
        }
    },
    options: {},
    routeOptions:
    {
        session: false
    },
    module: 'passport-hmac-strategy'
};

describe('bos-passport options Test', function () {

    beforeEach(function () {

    });

    afterEach(function () {

    });
});



