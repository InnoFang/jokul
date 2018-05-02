/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react'
import {
    Col,
    Row
} from 'antd';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Row >
                    <Col span={4}/>
                    <Col span={16} id="footer">
                        &copy;&nbsp;2018 KnockKnock. All Rights Reserved.
                    </Col>
                    <Col span={4}/>
                </Row>
            </footer>
        )
    }
}

export default Footer;

