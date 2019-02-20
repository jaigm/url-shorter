const model = require('./model')

const shorter = (text) => {
  if (isUrl(text)) {
    return {isUrl: true, result: model.createCode(text)}
  }

  return {isUrl: false, result: model.getUrlByCode(text)}
}

const isUrl = (text) => {
  const urlPattern = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
  return urlPattern.test(text);
}

module.exports = shorter
