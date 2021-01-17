import { NowRequest, NowResponse } from "@vercel/node";

const runMiddleware = (req: NowRequest, res: NowResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
export default runMiddleware;
