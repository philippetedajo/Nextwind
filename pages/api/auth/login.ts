import axios from "axios";
import withSession from "../../../utils/session";

export default withSession(async (req, res) => {
  const url = `${process.env.API_URL}/auth/login`;

  try {
    const data = await axios.post(url, req.body);

    console.log(data.data.code);

    if (data.data.code != 200) {
      console.log("not permit");
      const user = { sLoggedIn: false, data: data.data };
      res.json(user);
      return;
    }

    const user = { isLoggedIn: true, data: data.data };
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
