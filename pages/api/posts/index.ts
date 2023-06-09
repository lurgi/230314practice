import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

//API 핸들러.
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      body: { question, latitude, longitude },
      session: { user },
    } = req;
    const post = await client.post.create({
      data: {
        question,
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      post,
    });
  } else if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;
    const latitudeNumber = parseFloat(latitude?.toString()!);
    const longitudeNumber = parseFloat(longitude?.toString()!);
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            Wondering: true,
            Answer: true,
          },
        },
      },
      where: {
        latitude: {
          gte: latitudeNumber - 0.01,
          lte: latitudeNumber + 0.01,
        },
        longitude: {
          gte: longitudeNumber - 0.01,
          lte: longitudeNumber + 0.01,
        },
      },
    });
    res.json({
      ok: true,
      posts,
    });
  }
}
export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
