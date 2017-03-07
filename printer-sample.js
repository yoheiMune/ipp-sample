
// examples:
//  - https://github.com/tojocky/node-printer/tree/master/examples

const util = require('util');
const printer = require('printer');

// プリンターの一覧取得.
// https://github.com/tojocky/node-printer/blob/master/examples/getPrinters.js
console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));

// 印刷.
// https://github.com/tojocky/node-printer/blob/master/examples/printFile.js
printer.printFile({
    filename : 'sample.pdf',
    printer : 'EPSON_EP_808A_Series',
    success : jobId => {
        console.log('Sent to printer with ID:', jobId)
    },
    error : err => {
        console.log('Something wrong..', err)
    }
});
