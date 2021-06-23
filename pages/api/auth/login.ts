import axios from "axios";
import withSession from "../../../utils/session";

export default withSession(async (req, res) => {
  const url = `${process.env}/auth/login`;

  try {
    // we check that the user exists on GitHub and store some data in session
    const data = await axios.post(url, {
      email: "string",
      password: "string",
    });

    const user = { isLoggedIn: true, data };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
