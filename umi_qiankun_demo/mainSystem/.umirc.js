/*
 * @Author: your name
 * @Date: 2020-05-09 15:16:32
 * @LastEditTime: 2020-05-21 16:13:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /umiDemo/mainSystem/.umirc.js
 */
// ref: https://umijs.org/config/
export default {
	treeShaking: true,
	routes: [
		{
			path: '/',
			component: '../layouts/index',
			routes: [{ path: '/', component: '../pages/index' }, { path: '/subSystemA' }, { path: '/subSystemB' }]
		}
	],
	// base: 'h5/mainSystem',
	// publicPath: '//xxxxx.com/',
	base: '/h5/mainSystem', // 部署时非根目录需要配置路径前缀
	publicPath: '/h5/mainSystem/',
	outputPath: '../dist/mainSystem',
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: 'mainSystem',
				dll: true,
				locale: {
					enable: true,
					default: 'en-US'
				},
				routes: {
					exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//]
				}
			}
		],
		[
			'@umijs/plugin-qiankun',
			{
				master: {
					apps: [
						{
							name: 'subSystemA',
							// entry: '/h5/subSystemA',
							entry: '//localhost:8001/subSystemA',
							base: '/h5/mainSystem/subSystemA',
							path: '/mainSystem/subSystemA',
							mountElementId: 'root-slave',
							props: { loading: true }
						},
						{
							name: 'subSystemB',
							// entry: '/h5/subSystemB',
							entry: '//localhost:8002/subSystemB',
							base: '/h5/mainSystem/subSystemB',
							path: '/subSystemB',
							key: 'subSystemB',
							mountElementId: 'root-slave'
						}
					],
					jsSandbox: true,
					prefetch: true
				}
			}
		]
	]
};
