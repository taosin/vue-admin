/*
* @Author: iMocco
* @Date:   2018-08-01 11:12:14
* @Last Modified by:   iMocco
* @Last Modified time: 2018-08-01 14:43:11
*/

const routes = [
{
	path: '/',
	redirect: '/index'
}, {
	path: '/login',
	component: resolve => require(['@/views/login.vue'], resolve),
	meta: { title: '登录' }
}, {
	path: '/index',
	component: resolve => require(['@/index.vue'], resolve),
	meta: { title: '首页' },
	children: [
	{
		path: '/',
		redirect: '/dashboard'
	}, {
		path: '/dashboard',
		component: resolve => require(['@/views/dashboard/index.vue'], resolve),
		meta: { title: '首页' }
	}, {
		path: '/tabs',
		component: resolve => require(['@/views/tabs/index.vue'], resolve),
		meta: { title: 'Tabs' }
	}
	]
}
]
export default routes
