import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.menu_left}>
        <a href="http://news.baidu.com" >新闻</a>
        <a href="https://www.hao123.com" >hao123</a>
        <a href="http://map.baidu.com">地图</a>
        <a href="https://haokan.baidu.com/?sfrom=baidu-top" >视频</a>
        <a href="http://tieba.baidu.com" >贴吧</a>
        <a href="http://xueshu.baidu.com" >学术</a>
        <a href="http://www.baidu.com/more/" >更多</a>
      </div>
      <div className={styles.menu_right}>
        <a href="https://www.baidu.com/s?wd=%E9%AB%98%E8%80%83&amp;sa=searchpromo_gk_pc_ysj" style={{color: 'red'}}>高考加油</a>
        <span className={styles.set}>
          设置
        </span>
        <a className={styles.login} style={{color: 'white'}} href="https://passport.baidu.com/v2/?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2F&amp;sms=5" >登录</a>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
