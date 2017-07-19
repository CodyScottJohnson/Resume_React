/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { Collapsible, CollapsibleItem, Col, Row } from 'react-materialize';
import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Resume from '../Resume';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div className={s.view}>
      <Row className={s.nopadding}>
      <Col s={4} className={s.nopadding}>
        <Resume />
      </Col>
      <Col s={8}>
        <Header />
        {this.props.children}
        <div className="container">
        <Collapsible popout>
        	<CollapsibleItem header='First' icon='filter_drama'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        	<CollapsibleItem header='Second' icon='place'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        	<CollapsibleItem header='Third' icon='whatshot'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        </Collapsible>
        </div>
        <Feedback />
        <Footer />
        </Col>
        </Row>
      </div>
    ) : this.props.children;
  }

}

export default App;
