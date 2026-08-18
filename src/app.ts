import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello Implementing the CI part now' 
    
  });
});

app.listen(4545, () => {
  console.log('app is running on port 4545');
});
