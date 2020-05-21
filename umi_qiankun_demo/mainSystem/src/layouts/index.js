/*
 * @Author: your name
 * @Date: 2020-05-09 15:16:32
 * @LastEditTime: 2020-05-13 09:14:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /umiDemo/mainSystem/src/layouts/index.js
 */
import { Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

function BasicLayout(props) {
	const { location } = props;
	const selectKey = '/' + location.pathname.split('/')[1];
	return (
		<div className={styles.normal}>
			<div className={styles.menuWrap}>
				<Menu selectedKeys={[selectKey]}>
					<Menu.Item key="/">
						<Link to="/">首页</Link>
					</Menu.Item>
					<Menu.Item key="/todo">
						<Link to="/subSystemA">subSystemA</Link>
					</Menu.Item>
					<Menu.Item key="/myfav">
						<Link to="/subSystemB">subSystemB</Link>
					</Menu.Item>
				</Menu>
			</div>
			{props.children}
			<div id="root-slave" className={styles.appContainer}></div>
		</div>
	);
}

export default BasicLayout;
