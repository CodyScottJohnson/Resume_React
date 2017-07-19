/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <span className={s.brandTxt}></span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Cody Johnson</h1>
          <p className={s.bannerDesc}>Complex web apps made easy</p>
          <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Header, s);
