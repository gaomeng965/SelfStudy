/*
 * @Author: your name
 * @Date: 2020-05-09 15:11:08
 * @LastEditTime: 2020-05-14 10:51:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /umiDemo/subSystemA/.umirc.js
 */
// ref: https://umijs.org/config/
export default {
	treeShaking: true,
	routes: [
		{
			path: '/',
			component: '../layouts/index',
			routes: [{ path: '/', component: '../pages/index' }]
		}
	],
	base: '/h5/mainSystem/subSystemA', // 部署时非根目录需要配置路径前缀
	runtimePublicPath: false,
	publicPath: '/h5/subSystemA/',
	outputPath: '../dist/subSystemA',
	mountElementId: 'subSystemA-root',
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: 'subSystemA',
				dll: false,
				locale: {
					enable: true,
					default: 'en-US'
				},
				routes: {
					exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//]
				}
			}
		],
		['@umijs/plugin-qiankun/slave', {}]
	]
};
