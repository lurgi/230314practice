import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    body: { message },
    session: { user },
  } = req;
  const messages = await client.message.create({
    data: {
      message,
      stream: {
        connect: {
          id: +id?.toString()!,
        },
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.json({
    ok: true,
    messages,
  });
}
export default withApiSession(withHandler({ methods: ["POST"], handler }));
