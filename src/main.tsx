import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
// 与 tailwind 样式冲突
import '@arco-design/web-react/es/Switch/style/index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
