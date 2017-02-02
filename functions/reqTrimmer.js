const useragent = require('useragent');

const reqTrimmer = (req) => {
  let softwareRaw = useragent.parse(req.headers['user-agent']);
  let software = softwareRaw.os.toString();

  let languageRaw = req.headers['accept-language'];
  let language = languageRaw.split(',')[0];

  let ipaddress = req.headers["x-forwarded-for"];

  if (ipaddress) {
    let addressArray = ipaddress.split(",");
    ipaddress = addressArray[addressArray.length - 1];
  } else {
    ipaddress = req.connection.remoteAddress;
  }

  return({ software, language, ipaddress })
}

module.exports = { reqTrimmer };
