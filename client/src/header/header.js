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
    message,
    Button,
    Form
} from 'antd';
import {
    Redirect,
    Link
} from 'react-router-dom'

import './header.css'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'unknown',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userid: 0
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    };

    handleClick(e) {
        this.setState({
            current: e.key,
        });
        if ('register' === e.key) {
            this.setModalVisible(true);
        }
    }

    render() {
        return (
            <header className="App-header">
                <Row>
                    <Col span={3}/>
                    <Col span={2}>
                        <a href="/" id="logo">
                            <img src={require('../images/logo.png')} alt="logo"/>
                        </a>
                    </Col>
                    <Col span={4}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{lineHeight: '64px'}}>
                            <Menu.Item key="home">
                                <Link to={'/'}/><Icon type="home"/>主页
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="profile"/>分类检索
                                <Link to={'/category'}/>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={10}/>
                    <Col span={2}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{lineHeight: '64px'}}>
                            <Menu.Item key="user">
                                <Icon type="user"/>登录/注册
                            </Menu.Item>
                        </Menu>

                    </Col>
                    <Col span={3}/>
                </Row>
                <br/>
                <br/>
                <Row >
                    <Col span={24}>
                        <div id="title">
                            <img src={require('../images/JOKUL.png')} alt="logo"/>
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
            </header>
        )
    }
}

export default Header;