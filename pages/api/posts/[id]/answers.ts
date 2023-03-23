import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

//API 핸들러.
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { Answer },
  } = req;

  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id?.toString()!,
        },
      },
      answer: Answer,
    },
  });
  res.json({
    ok: true,
    answer: newAnswer,
    user,
  });
}
export default withApiSession(withHandler({ methods: ["POST"], handler }));
