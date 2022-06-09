//OS module....Operating Sytsem
//built in modules, not external

const os = require('os')

//infoo about current user
const user = os.userInfo()
//console.log(user)

//system uptime in sec
//console.log(`system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)
