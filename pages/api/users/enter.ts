import client from "@/libs/server/client";
import smtpTransport from "@/libs/server/email";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(10000 + Math.random() * 900000) + "";
  const tokens = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  }
  if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID + "@naver.com",
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `Authentication Code : ${payload}`,
    };
    const result = smtpTransport.sendMail(mailOptions, (error, responses) => {
      if (error) {
        console.log(error);
        return null;
      } else {
        console.log(responses);
        return null;
      }
    });
    smtpTransport.close();
    console.log(result);
  }
  return res.json({
    ok: true,
  });
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isprivate: false,
  })
);
