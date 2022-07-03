import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../lib/midlleWares/ironSession";
import CreateHandler from "../../../lib/midlleWares/nextConnect";
import validation from "../../../lib/midlleWares/validation";
import { loginSchema } from "../../../modules/user/user.schema";
import { LoginUser } from "../../../modules/user/user.service";

const handler = CreateHandler();
handler.post(validation({ body: loginSchema }), async (req, res) => {
  try {
    const user = await LoginUser(req.body);
    req.session.user = {
      id: user.id,
      user: user.user,
    };
    await req.session.save();
    res.send({ ok: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
export default withIronSessionApiRoute(handler, ironConfig);
