export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>用户页面</div>;
  } else {
    redirectTo('/login');
  }
}