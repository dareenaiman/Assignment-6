const Log = require('./log.model.js')

async function createLog(){
    return await Log.create()
}

async function addLog(logData){
    return await Log.collection.insertOne(logData)
}

module.exports={createLog,addLog}