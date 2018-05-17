/**
 * Created by InnF on 2018/5/17.
 */

import React from 'react'
import {
    Col,
    Row
} from 'antd';
import IconTitle from '../iconTitle/IconTitle'
import './Admin.css'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <IconTitle/>
                <br/>
                <br/>
                <Row>
                    <Col span={4}/>
                    <Col span={16}>
                        <h1>For admin</h1>
                    </Col>
                    <Col span={4}/>
                </Row>
            </div>
        )
    }
}

export default Footer;
