const express = require("express");

const cors = require("cors");

const PORT = 8000;

const app = express();

const db = require("./model/index");
const User = require("./model/User");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((e) => {
    console.log(e);
  });

/**
 * cors 에러
 * 콘솔창에 "access-control-allow-origin" header is present...
 * 에러가 나면 cors 설정을 해야한다.
 *
 * cors란 브라우저 보안정책
 * cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청했을때 발생
 * cors 설치
 * npm i cors
 *
 * origin : '*', 누가 들어오든 요청허용
 * origin : true, 들어오는 요청 도메인/포트가 자동으로 origin에 들어간다.
 * origin : '*', 실제로 서비스 되는 도메인을 입력해줘서 해당 도메인만 접근할 수 있게 허용한다.
 * credential : true, false( 사용자 인증이 필요한 리소스를 접근허용 해줄지 말지 )
 */

const options = {
  origin: `*`, // 모든 곳 허용 origin: "*"
};

app.use(cors(options));
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  const { id, pwd } = req.body;
  res.send({ id, pwd });
});
app.post("/login", async (req, res) => {
  const { id, pwd } = req.body;
  const users = await User.findOne({
    where: { user_id: id, user_pwd: pwd },
  });
  users ? res.send(id) : res.send(false);
});
app.post("/signUp", async (req, res) => {
  const { id, pwd } = req.body;
  const user = await User.findOne({
    where: { user_id: id },
  });
  if (!user) {
    User.create({
      user_id: id,
      user_pwd: pwd,
    }).then(() => {
      res.send("가입됨");
    });
  } else {
    res.send("동일한 아이디가 있어요");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 포트 열림.`);
});
