const path = require('path')

console.log(__dirname, 'path')
module.exports = {
    optimize: {
        minimize: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, '/styles')],
    },
}