import styles from './index.less';
import { Link } from 'umi';

export default function () {
  return (
    <div className={styles.content}>
      <div className={styles.pic} />
      {/* 搜索框 */}
      <div className={styles.search}>
        <span className={styles.searchKw}>
          <i class={styles.icon_search}></i>
          <input />
        </span>
        <span className={styles.searchButton}>
          <button>百度一下</button>
        </span>
      </div>
      {/* 百度热榜 */}
      <div className={styles.listWrapper}>
        <div className={styles.list_title}>
          <span className={styles.list_title_left}>
            <Link to="/test" style={{color: 'black', textDecoration: 'none'}}>百度热榜</Link>
          </span>
          <div className={styles.list_title_right}>
            <i ></i>
            <span>换一换</span>
          </div>
        </div>
        <div>
          <ul className={styles.list}>
            <div className={styles.list_left}>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=31%E7%9C%81%E5%8C%BA%E5%B8%82%E6%96%B0%E5%A2%9E%E7%A1%AE%E8%AF%8A4%E4%BE%8B&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1">
                  <span className={styles.content_num}>1</span>
                  <span class={styles.content_title}>31省区市新增确诊4例</span>
                </a>
              </li>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%B8%89%E9%83%A8%E9%97%A8%E8%81%94%E5%90%88%E5%8F%91%E5%B8%839%E4%B8%AA%E6%96%B0%E8%81%8C%E4%B8%9A&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1" >
                  <span className={styles.content_num}>2</span>
                  <span class={styles.content_title}>三部门联合发布9个新职业</span>
                </a>
              </li>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=31%E7%9C%81%E5%8C%BA%E5%B8%82%E6%96%B0%E5%A2%9E%E7%A1%AE%E8%AF%8A4%E4%BE%8B&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1">
                  <span className={styles.content_num}>3</span>
                  <span class={styles.content_title}>31省区市新增确诊4例</span>
                </a>
              </li>
            </div>
            <div className={styles.list_right}>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%B8%89%E9%83%A8%E9%97%A8%E8%81%94%E5%90%88%E5%8F%91%E5%B8%839%E4%B8%AA%E6%96%B0%E8%81%8C%E4%B8%9A&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1" >
                  <span className={styles.content_num}>4</span>
                  <span class={styles.content_title}>三部门联合发布9个新职业</span>
                </a>
              </li>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=31%E7%9C%81%E5%8C%BA%E5%B8%82%E6%96%B0%E5%A2%9E%E7%A1%AE%E8%AF%8A4%E4%BE%8B&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1">
                  <span className={styles.content_num}>5</span>
                  <span class={styles.content_title}>31省区市新增确诊4例</span>
                </a>
              </li>
              <li>
                <a href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%B8%89%E9%83%A8%E9%97%A8%E8%81%94%E5%90%88%E5%8F%91%E5%B8%839%E4%B8%AA%E6%96%B0%E8%81%8C%E4%B8%9A&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;hisfilter=1" >
                  <span className={styles.content_num}>6</span>
                  <span class={styles.content_title}>三部门联合发布9个新职业</span>
                </a>
              </li>
            </div>
          </ul>
        </div>

      </div>
    </div>

  );
}
