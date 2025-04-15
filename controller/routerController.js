const path = require('path')
const chatRouter =  (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}

module.exports = chatRouter;