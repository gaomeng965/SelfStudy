/*
 * @Author: your name
 * @Date: 2020-05-09 15:11:08
 * @LastEditTime: 2020-05-14 10:56:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /umiDemo/subSystemB/.umirc.js
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
	base: '/h5/mainSystem/subSystemB', // 部署时非根目录需要配置路径前缀
	publicPath: '/h5/subSystemB/',
	outputPath: '../dist/subSystemB',
	runtimePublicPath: false,
	mountElementId: 'subSystemB-root',
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: 'subSystemB',
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
