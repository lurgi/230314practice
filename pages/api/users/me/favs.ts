import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { withApiSession } from "@/libs/server/withSession";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    const { session: { user }, } = req;
    const favs = await client.fav.findMany({
        where: {
            userId : user?.id
        }
    })
  res.json({
    ok: true,
    favs,
  });
  res.status(200).end();
}
export default withApiSession(withHandler({ methods: ["GET"], handler }));
