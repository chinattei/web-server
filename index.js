const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   console.log(req)
//   res.send('<h1>TOP PAGE!<h1>');
// });
app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if (answer === '2') {
    // res.send('<h1>正解</h1>');
    res.redirect('/correct.html');
  } else {
    // res.send('不正解');
    res.redirect('/wrong.html');
  }
});

const PROT = process.env.PROT || 3000;
app.listen(PROT, () => {
  console.log('I am running!');
});

console.log('最終行');
