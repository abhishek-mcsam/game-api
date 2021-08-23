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

module.exports = {
    log: (level, msg, file = null) => {

        var log = format_my_log(level, msg);

        fs.appendFile(logFile, log, (err) => {
            if (err) throw err;
        })

    },
    infolog: (level, msg, file = null) => {

        var log = format_my_log(level, msg);

        fs.appendFile(loginfoFile, log, (err) => {
            if (err) throw err;
        })
    },
    // uilog: (level, msg, file = null) => {

    //     var log = format_my_log(level, msg);


    //     fs.appendFile(UILOGFILE, log, (err) => {
    //         if (err) throw err;
    //     })
    // }
}
module.exports =()=>{
    
}