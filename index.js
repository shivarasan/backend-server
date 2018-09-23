const expess = require('express');

const app = expess();

app.get('/', (req,res) => {
    res.send('api server starting');
});

app.listen(3005, () => {
    console.log('server started');
})