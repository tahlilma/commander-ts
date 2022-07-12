const fs = require("fs");

const metaGenerator = (opts) => {
  const build = fs.readdirSync("./build").map((item) => {
    const splitted = item.split(".");
    splitted.pop();
    return splitted[0];
  });

  if (opts !== undefined && opts.type === "alt") {
    const altIndex = {};
    build.forEach((item) => {
      const data = require(`./build/${item}.js`);
      altIndex[data.alt] = data;
    });
    return altIndex;
  }

  const commandIndex = {};
  build.forEach((item) => {
    commandIndex[item] = require(`./build/${item}.js`);
  });
  return commandIndex;
};


module.exports = metaGenerator;