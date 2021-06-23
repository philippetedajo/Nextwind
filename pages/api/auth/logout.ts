import withSession from "../../../utils/session";
import axios from "axios";

export default withSession(async (req, res) => {
  const url = `${process.env.API_URL}/auth/logout`;
  const user = req.session.get("user");

  try {
    const data = await axios.get(url, {
      headers: {
        Authorization: user.data.token,
      },
    });

    if (data.data.code != 200) {
      res.json({ data: data.data });
      return;
    }

    req.session.destroy();
    res.json({ isLoggedIn: false, data: null });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
