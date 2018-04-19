const jwt = require('jsonwebtoken');
let Token = {
    getToken: function (jsonObj) {
        let res = jwt.sign(jsonObj, 'mykey', { expiresIn: 60 });
        console.log(res);
        return res;
    },
    checkToken: function(token){
        try {
            let decoded = jwt.verify(token, 'mykey');
            console.log('6666');
            console.log(decoded);
            return true;
        } catch (error) {
            return false;
        }
        
    }
}
module.exports = Token;