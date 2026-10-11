const logRepository = require('./log.repository.js');

async function createLog(){
    return await logRepository.createLog();
};

async function addLog(logData) {
    return await logRepository.addLog(logData)
}

module.exports={createLog,addLog}