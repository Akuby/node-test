// get으로 crud 흉내내기
// express + JSON 배열 + 배열객체 내장 메소드 활용

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

var carList = [
  {name : '소나타', price : '20000000', effe : '11.0km'},
  {name : '아반떼', price : '30000000', effe : '15.4km'},
  {name : '투싼', price : '40000000', effe : '14.6km'},
  {name : '싼타페', price : '45000000', effe : '10.0km'},
  {name : '코나', price : '30000000', effe : '12.1km'}
]

app.get('/car', (req, res) => {
  console.log('모두 조회\n');
  // for ( let i = 0; i < carList.length; i++ ) {
  //   console.log(carList[i].name);
  //   console.log(carList[i].price);
  //   console.log(carList[i].effe + '\n');
  // }
  carList.forEach(el => {
    console.log(el.name);
    console.log(el.price);
    console.log(el.effe + '\n');
  })
  console.log('--------------------------')
})

app.get('/car/:name', (req, res) => {
  console.log(req.params);
  console.log('조건 조회\n');
  const name = req.params.name;
  for ( let i = 0; i < carList.length; i++ ) {
    if(carList[i].name == name) {
      console.log(carList[i].name)
      console.log(carList[i].price);
      console.log(carList[i].effe);
    }
  }
  console.log('--------------------------')
})

app.get('/car/add/:name&:price&:effe', (req, res) => {
  console.log(req.params);
  console.log('차량 추가\n');
  const newCarObj = req.params;
  carList = carList.concat(newCarObj);
  console.log('추가 완료!\n')
  for ( let i = 0; i < carList.length; i++ ) {
    console.log(carList[i].name);
    console.log(carList[i].price);
    console.log(carList[i].effe + '\n');
  }
  console.log('--------------------------')
})

app.get('/car/update/:name&:price', (req, res) => {
  console.log('차량 수정\n');
  const name = req.params.name;
  const price = req.params.price;
  let flag = 0;
  console.log('수정할 차량 : ' + req.params.name)
  for ( let i = 0; i < carList.length; i++ ) {
    if (carList[i].name == name) {
      carList[i].price = price;
      flag = 1;
    }
  }
  console.log('--------------------------')
  if ( flag == 1 ) {
    console.log('변경완료!\n')
    for ( let i = 0; i < carList.length; i++ ) {
      console.log(carList[i].name);
      console.log(carList[i].price);
      console.log(carList[i].effe + '\n');
  }
  console.log('--------------------------')
  } else if (flag == 0) {
    console.log('해당 차량이 존재하지 않습니다.')
  }
})

app.get('/car/delete/:name', (req, res) => {
  console.log(req.params);
  console.log('차량 삭제\n');
  let del_index = 0;
  let flag = 0;
  const name = req.params.name;
  for ( let i = 0; i < carList.length; i++ ) {
    if(carList[i].name == name) {
      del_index = i;
      flag = 1;
      break;
    }
  }
  var slicedList = carList.splice(del_index, 1);
  console.log('삭제할 차량 : ' + req.params.name)
  console.log('--------------------------')
  if (flag == 1) {
    console.log('삭제 완료! \n')
    for ( let i = 0; i < carList.length; i++ ) {
      console.log(carList[i].name);
      console.log(carList[i].price);
      console.log(carList[i].effe + '\n');
    }
    console.log('--------------------------')
  } else if (flag == 0) {
    console.log('삭제할 차량이 존재하지 않습니다.')
  }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버가 열렸습니다!`);
})