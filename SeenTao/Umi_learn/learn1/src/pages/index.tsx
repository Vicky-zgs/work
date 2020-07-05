import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
import Layout from '../layouts/index'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/user">Users Page</Link>
      <Layout />
    </div>
  );
}
