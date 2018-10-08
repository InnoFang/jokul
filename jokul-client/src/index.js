import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

/* LocalProvider 提供中文支持，组件默认是英文 */
ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));
