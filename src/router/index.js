import App from '../App'
import Home from '../pages/main/home';
import Demo01 from '../pages/test/demo01'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: Home,
        children: [
          { path: '/demo01', component: Demo01 },
        ]
      }
    ]
  }
]
export default routes