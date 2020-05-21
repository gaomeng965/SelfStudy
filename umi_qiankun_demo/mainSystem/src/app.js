/*
 * @Author: your name
 * @Date: 2020-05-09 15:16:32
 * @LastEditTime: 2020-05-12 16:17:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /workSpace/mainSystem/src/app.js
 */
export const dva = {
	config: {
		onError(err) {
			err.preventDefault();
			console.error(err.message);
		}
	}
};

export const qiankun = new Promise(resolve => {
	resolve({
		lifeCycles: {
			beforeLoad: props => {
				console.log('beforeLoad:', props);
			},
			beforeMount: props => {
				console.log('beforeMont:', props);
			},
			afterMount: props => {
				console.log('afterMount:', props);
			},
			beforeUnmount: props => {
				console.log('beforeUnmount:', props);
			},
			afterUnmount: props => {
				console.log('afterUmount:', props);
			}
		}
	});
});
