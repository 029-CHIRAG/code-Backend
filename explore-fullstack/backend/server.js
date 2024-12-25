import express from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'a joke',
      content: 'achha hai',
    },
    {
      id: 2,
      title: 'another joke',
      content: 'bahut achha hai',
    },
    {
      id:3,
      title:'jokes',
      content:'dfsd'
    }
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`running on localhost:${PORT}`);
});
