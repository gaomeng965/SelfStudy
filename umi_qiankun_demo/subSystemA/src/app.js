/*
 * @Author: your name
 * @Date: 2020-05-09 15:11:08
 * @LastEditTime: 2020-05-12 16:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /workSpace/subSystemA/src/app.js
 */
export const dva = {
	config: {
		onError(err) {
			err.preventDefault();
			console.error(err.message);
		}
	}
};

export const qiankun = {
	// 应用加载之前
	async bootstrap(props) {
		console.log('app1 bootstrap', props);
	},
	// 应用 render 之前触发
	async mount(props) {
		console.log('app1 mount', props);
	},
	// 应用卸载之后触发
	async unmount(props) {
		console.log('app1 unmount', props);
	}
};
