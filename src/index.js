import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
    initialState: {
     products: [
          { name: 'dva', id: 1 },
         { name: 'antd', id: 2 },
 ],
},
});

// 2. Plugins
app.use(createLoading());

// 3. Model 载入模型
// app.model(require('./models/example'));
app.model(require('./models/products'));

app.model(require("./models/users"));

// 4. Router 载入路由
app.router(require('./router'));

// 5. Start 启动
app.start('#root');
