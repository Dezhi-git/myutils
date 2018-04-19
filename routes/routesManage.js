const Response = require('../utils/Response.js');
let route = function(app){
    app.get('/register', registerRoute);
    app.get('/login', loginRoute);

    function loginRoute(req, res){
        res.json(new Response(200, 'ok', {id: 666}))
    }
    function registerRoute(req, res){
        res.json(new Response(200, 'ok', {status: 1}))
    }
}
module.exports = route;