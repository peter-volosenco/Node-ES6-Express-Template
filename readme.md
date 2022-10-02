# Node ES6 template

## contains:
1. express
2. nodemon (dev)
3. babel (dev)

## run with:
```
> npm i
> npm start
```


### instructions
```

npm init -y

npm i nodemon --save-dev
npm i express --save
npm i @babel/core @babel/node @babel/preset-env --save-dev

touch .babelrc

```
{
"presets": [
"@babel/preset-env"
]
}
```



mkdir src
cd src
touch index.js
cd ..





```
import express from 'express';
const app = express()

app.get('/', (req,res) => {
res.send('200');
});

app.listen(300, () => {
console.log('server running on port 300');
})
```



```
"start" : "nodemon --exec babel-node src/index"
```


```
