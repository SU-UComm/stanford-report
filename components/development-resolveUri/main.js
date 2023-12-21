module.exports = async function (input, info) {
  return JSON.stringify(await info.ctx.resolveUri(input.asset));
};
