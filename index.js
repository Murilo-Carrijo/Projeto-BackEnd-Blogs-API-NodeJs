const express = require('express');

const userRoute = require('./router/userRouters');
const loginRoute = require('./router/loginRouter');
const categoryRoute = require('./router/categoriesRouter');
const postRouter = require('./router/postRouter');

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
