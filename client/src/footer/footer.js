/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react'
import {
    Col,
    Row
} from 'antd';
import './footer.css'

/*
 * 一个简单的 Footer
 * */
class Footer extends React.Component {

    render() {
        return (
            <footer id="footer">
                <br/>
                <br/>
                <Row >
                    <Col span={4}/>
                    <Col span={16} id="copy">
                        &copy;&nbsp;2018 jokul. All Rights Reserved.
                    </Col>
                    <Col span={4}/>
                </Row>
            </footer>
        )
    }
}

export default Footer;

