const logService = require('./log.service.js')

async function createLog(req, res, next){
    try {
        await logService.createLog();
        res.status(201).json({ "ok": 1 });
    } catch (error) {
        
        next(error);
    }
}

async function addLog(req,res,next){
    try {
        const result=await logService.addLog(req.body)
        res.status(201).json({acknowledged:result.acknowledged,insertedId:result.insertedId})
    } catch (error) {
        next(error)
    }
}

module.exports={createLog,addLog}