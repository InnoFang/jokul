/**
 * Created by InnF on 2018/5/17.
 */

/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import './IconTitle.css'

/*
* 显示 Logo
* */
class IconTitle extends React.Component {

    render() {
        return (
            <div>
                <Row >
                    <Col span={24}>
                        <div id="title">
                            <img id="bigImg" src={require('../images/JOKUL.png')} alt="logo"/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default IconTitle;
