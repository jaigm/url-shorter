const shortenUrls = []

const LENGTH = 4

/**
 * @param text
 */
const getUrlByCode = (text) => {
  return shortenUrls[text]
}

/**
 * @param text
 */
const createCode = (text) => {
  let random
  do {
    random = generateRandom()
  } while (shortenUrls[random])

  shortenUrls[random] = text

  return random
}

const generateRandom  = () => {
  return Math.random().toString(36).substring(0, LENGTH)
}

module.exports = {
  getUrlByCode,
  createCode
}
