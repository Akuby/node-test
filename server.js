const express = require('express') // express 모듈을 가져와서 할당.

const app = express() // express 객체 생성해서 app 상수에 할당.

const PORT = process.env.PORT || 4000; // 서버에 포트 4000번 할당. well-known port : 3306(MySQL), 1521(Oracle), 31(FTP) ... 이런거만 피해서 사용

app.get('/', (req, res) => {
    console.log('root!');
})
app.get('/hello', (req, res) => {
    console.log('hello!');
})

app.listen(PORT, () => {
    console.log(`Server On: http://localhost:${PORT}`);
})
