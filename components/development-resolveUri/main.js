export default async (input, info) => {
  return JSON.stringify(await info.ctx.resolveUri(input.asset));
};
