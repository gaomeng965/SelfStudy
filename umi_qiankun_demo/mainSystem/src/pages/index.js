/*
 * @Author: your name
 * @Date: 2020-05-09 15:16:32
 * @LastEditTime: 2020-05-13 09:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /umiDemo/mainSystem/src/pages/index.js
 */
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
export default function() {
	const gotoTodo = url => {
		window.location.href = url;
	};
	return <div className={styles.normal}>这里是主页面</div>;
}
