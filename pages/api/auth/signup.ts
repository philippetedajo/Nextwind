import axios from "axios";
import withSession from "../../../utils/session";

export default withSession(async (req, res) => {
  const url = `${process.env.API_URL}/auth/register`;

  try {
    const data = await axios.post(url, req.body);

    if (data.data.code != 200) {
      const result = { isLoggedIn: false, data: data.data };
      res.json(result);
      return;
    }

    const newUser = { isLoggedIn: true, data: data.data };
    req.session.set("user", newUser);
    await req.session.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
