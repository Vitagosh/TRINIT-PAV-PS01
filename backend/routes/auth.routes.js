const router = require("express").Router();
// const router = Router();
const db = require("../utils/Dynamo");
const { Response, verifyHash, generateToken } = require("../utils");

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        pk: "betheone",
        sk: `user#${email}`,
      },
    };
    const data = await db.get(params);
    if (!data.Item) return res.json(Response(401, "User Doesn't Exist"));
    const passwordValid = await verifyHash(password, data.Item.password);
    if (!passwordValid) return res.json(Response(401, "Bad Credentials"));
    const accessToken = generateToken({
      email: data.Item.email,
      name: data.Item.name,
      role: data.Item.role,
    });
    return res.json(Response(200, "success", { accessToken, ...data.Item }));
  } catch (err) {
    console.log(err);
    return res.json(Response(500, "Error encountered"));
  }
});

router.route("/register/philanthropist").post(async (req, res) => {
  try {
    const { name, email, password} = req.body;
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        pk: "betheone",
        sk: `user#${email}`,
      },
    };
    const data = await db.get(params);
    if (data.Item) return res.json(Response(401, "User Already Exists"));
    const params1 = {
      TableName: process.env.TABLE_NAME,
      Item: {
        pk: "betheone",
        sk: `user#${email}`,
        name,
        email,
        password,
        role: "philanthropist",
      },
    };
    await db.put(params1);
    return res.json(Response(200, "success"));
  } catch (err) {
    console.log(err);
    return res.json(Response(500, "Error encountered"));
  }
});

module.exports = router;