import IndexComponent from './components/index.react';
import AboutComponent from './components/about.react';
import MessageComponent from './routes/message/message.react';
import MessageDetailView from './routes/message/components/message-detail-view.react';
console.log(__dirname+'routes ', 'route init')
const routes = {
  childRoutes: [{
    path: '/about',
    getComponent: (location, cb) => { require.ensure([], (require) => { cb(null, AboutComponent) }) }
  }, {
    path: '/message',
    getComponent: (location, cb) => { require.ensure([], (require) => { cb(null, MessageComponent) }) },
    getChildRoutes: (location, cb) => {
      cb(null, require('./routes/message/routes/message-detail.react'))
    }
  }, {
    path: '/',
    component: IndexComponent,
  }]
}
export default routes ;
