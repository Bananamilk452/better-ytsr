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


function parseFilters(option) {
  let buffers = []
  
  for (let key in option) {
    key = key.toLowerCase()
    const value = option[key].toLowerCase();

    if (Array.isArray(value) && key === 'features') {
      value.forEach((k) => {
        buffers.push(Buffer.from(filters.features[k], 'base64'));
      });
    }
    else buffers.push(Buffer.from(filters[key][value], 'base64'));
  }

  if (buffers.length === 0) return '';
  return Buffer.concat(buffers).toString('base64')
}

const main = module.exports = async(searchString, options) => {
  if (
    typeof options === 'object' &&
    !Array.isArray(options) &&
    options !== null &&
    options.hasOwnProperty('filters')
  ) {
    console.log(options)
    const sp = encodeURI(encodeURIComponent(parseFilters(options.filters)));
    return ytsr(`https://www.youtube.com/results?search_query=${searchString}&sp=${sp}`, options)
  } else return ytsr(searchString, options);
}