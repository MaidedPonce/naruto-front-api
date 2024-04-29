import { NextApiRequest, NextApiResponse } from "next";

const hola = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.send("hola");
};

export default hola
