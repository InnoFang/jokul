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
                    <Col span={5}/>
                    <Col span={14}>
                        <div id="info-pad">
                            <h1>For admin</h1>
                        </div>

                    </Col>
                    <Col span={5}/>
                </Row>
            </div>
        )
    }
}

export default Footer;
