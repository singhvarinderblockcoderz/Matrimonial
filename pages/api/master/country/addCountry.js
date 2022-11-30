import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  //const session = await getSession({ req });

  if (req.method === "POST") {
    try {
      const { data } = req.body;
      console.log(data, "to send data to send to api");
      const { token } = req.body;
      console.log(token, "to send token to api for collective dashboard data");
      var config = {
        method: "post",
        url: "http://192.168.1.43:3000/api/v1/admin/addcountry",
        headers: {
          Authorization: `Bearer ${token} `,
        },data
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
