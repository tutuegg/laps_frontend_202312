import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// 导入组件
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';

function App() {
  const userRole = 'admin'; // 这里应该根据登录信息设置用户角色

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/staff" component={StaffDashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Redirect from="/" to={userRole === 'admin' ? '/admin' : '/staff'} />
      </Switch>
    </Router>
  );
}

export default App;
