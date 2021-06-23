import axios from "axios";
import withSession from "../../../utils/session";

export default withSession(async (req, res) => {
  const url = `${process.env.API_URL}/auth/login`;

  try {
    const data = await axios.post(url, req.body);

    if (data.status !== 200) console.log("Something goes wrong");

    const user = { isLoggedIn: true, data: data.data };
    console.log(user);
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }
    res.status(500).json({ message: error.message });
  }
});
