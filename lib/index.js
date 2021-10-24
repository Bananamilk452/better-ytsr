const ytsr = require('ytsr')
const filters = require('./filters.json')

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}


function parseSP(option, exactMatch) {
  let buffers = []

  if (exactMatch) buffers.push(Buffer.from('QgIIAQ==', 'base64'))

  for (let key in option) {
    key = key.toLowerCase()
    
    if (Array.isArray(option[key]) && key === 'features') {
      const values = option[key].map((t) => t.toLowerCase());
      values.forEach((k) => {
        buffers.push(Buffer.from(filters.features[k], 'base64'));
      });
    } else {
      const value = option[key].toLowerCase();
      buffers.push(Buffer.from(filters[key][value], 'base64'));
    }
  }

  if (buffers.length === 0) return '';
  return Buffer.concat(buffers).toString('base64')
}

const main = async (searchString, options) => {
  if (
    typeof options === 'object' &&
    !Array.isArray(options) &&
    options !== null
  ) {
    if (options.hasOwnProperty('filters')) {
      const sp = encodeURI(encodeURIComponent(parseSP(options.filters, options.exactMatch)));
      return ytsr(`https://www.youtube.com/results?search_query=${searchString}&sp=${sp}`, options)
    } else if (options.hasOwnProperty('exactMatch') && options.exactMatch) {
      return ytsr(`https://www.youtube.com/results?search_query=${searchString}&sp=QgIIAQ%253D%253D`, options)
    }
  } else return ytsr(searchString, options);
}

module.exports = main
module.exports.continueReq = ytsr.continueReq