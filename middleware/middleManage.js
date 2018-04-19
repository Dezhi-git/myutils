const Token = require('../utils/Token.js');
const Response = require('../utils/Response.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');
let middleWare = (app) =>  {
    //regist middleware by middleware object
    function registerMiddleWare(middleWareObj){
        //my middleware
        for(let route in middleWareObj){
             app.use('/' + route, middleWareObj[route])
        }
    
    }
    
    /**
     * sys middleware
     */
    function logger(req, res, next){
        log4js.configure({
            appenders: { 
                            test: { type: 'file', filename: 'log/test.log' },
                            test2: {type: 'file', filename: 'log/test2.log'}
                        },
            categories: { 
                            default: { appenders: ['test'], level: 'debug'},
                            test2:  { appenders: ['test2'], level: 'info' }
                        }
        });
          const logger = log4js.getLogger('test2');
          logger.trace('Entering cheese testing');
          logger.debug('Got cheese.');
          logger.info('Cheese is Gouda.');
          logger.warn('Cheese is quite smelly.');
          logger.error('Cheese is too ripe!');
          logger.fatal('Cheese was breeding ground for listeria.');
          next();
    }
    //error handle
    function errorHandler(err, req, res, next){
        return function(err, req, res, next){
            console.log('error middle ') ;
            res.end('err msg');
        }
    }
    //sys middleware manage object
    let sysMiddleWare = {
        cookieParser: cookieParser,
        errorHandler: errorHandler,
        bodyParser: bodyParser
    }
    function registerSysMiddleWare(){
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({ extended: false }))  
        // parse application/json  
        app.use(bodyParser.json())  
        
        app.use(logger)
    }
    registerSysMiddleWare();

    function registerHanler(req, res, next){
        console.log('register middle ');
        next();
    }
    function loginHandler(req, res, next){
        let t = Token.getToken({name: 'sss'});
        let checkResult = Token.checkToken(t);
        if(checkResult){
            console.log('login middle ');
            next();       
        }else{
            res.json(new Response(500, 'invalid token', null))
        }
    }
    
    //my midware manage object
    let middleWareObj = {
        login: loginHandler,
        register: registerHanler,
        
    }
    registerMiddleWare(middleWareObj);
};

module.exports = middleWare;