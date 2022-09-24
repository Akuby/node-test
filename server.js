const express = require('express') // express 모듈을 가져와서 할당.

const app = express() // express 객체 생성해서 app 상수에 할당.

const PORT = process.env.PORT || 4000; // 서버에 포트 4000번 할당. well-known port : 3306(MySQL), 1521(Oracle), 31(FTP) ... 이런거만 피해서 사용

app.get('/api/add/:num1&:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 + num2;
  res.send(`더하기 결과는 ${result} 입니다.`)
})

app.get('/api/sub/:num1&:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 - num2;
  res.send(`빼기 결과는 ${result} 입니다.`)
})

app.get('/api/mul/:num1&:num2', (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  const result = num1 * num2;
  res.send(`곱한 결과는 ${result} 입니다.`)
})

app.get('/api/div/:num1&:num2', (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  const result = num1 / num2;
  res.send(`나눈 결과는 ${result} 입니다.`)
})
app.listen(PORT, () => {
    console.log(`Server On: http://localhost:${PORT}`);
})
