/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react'
import {
    Row,
    Col,
    Modal,
    Tabs,
    Icon,
    Menu,
    Form
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Header extends React.Component {
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}/>
                    <Col span={20}>
                        <h1>Knock Knock</h1>
                        <p>A movie site built by spring boot and react.js</p>
                    </Col>
                    <Col span={2}/>
                </Row>
            </header>
        )
    }
}

export default Header;