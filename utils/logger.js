'use strict';

const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/server.log');
const loginfoFile = path.join(__dirname, '../logs/fingerprint.log');
const UILOGFILE = path.join(__dirname, '../logs/ui.log');


function format_my_log(level, msg, file= null) {

    if (typeof msg == 'object' || typeof msg == 'Array') {
        msg = JSON.stringify(msg);
    }

    let log = '';

    if (file != null) {
        log += `---\n ${file} \n`;
    }

    log += `[${new Date().toISOString()}] - [${level}] - { ${msg} };\n`;

    return log;
}

 
 
 
    
exports.log = (level, msg, file = null) => {
    console.log("RUnnnnnn")

        let logs = format_my_log(level, msg);

      return  fs.appendFile(logFile, logs, (err) => {
            if (err) throw err;
        })

    } 
 exports.infolog  = (level, msg, file = null) => {

      let   logs= format_my_log(level, msg);

       return fs.appendFile(loginfoFile, logs, (err) => {
            if (err) throw err;
        })
    }

exports.uilog = (level, msg, file = null) => {

        let logs = format_my_log(level, msg);


        return fs.appendFile(UILOGFILE, logs, (err) => {
            if (err) throw err;
        })
    }
    
