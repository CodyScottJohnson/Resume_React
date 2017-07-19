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
import s from './Resume.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Resume() {
  return (
    <div className={s.Side}>
      <ul>
        <li className={s.MenuItem}>Experience</li>
        <li className={s.MenuItem}>Education</li>
        <li className={s.MenuItem}>Skills</li>
        <li className={s.MenuItem}>About</li>
      </ul>
    </div>
  );
}

export default withStyles(Resume, s);
