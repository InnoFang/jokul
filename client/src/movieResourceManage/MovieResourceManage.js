/**
 * Created by InnF on 2018/5/17.
 */

import React from 'react'
import {
    Col,
    Row,
    Form,
    Select,
    Button,
    Slider,
    Upload,
    Icon,
    Input,
    InputNumber,
    message,
    Tabs,
    Checkbox,
    Divider,
    Popover,
    Pagination,
    notification,
    Spin
} from 'antd';
import IconTitle from '../iconTitle/IconTitle'
import './MovieResourceManage.css'
import Api from '../Api'

const FormItem = Form.Item;
const Option = Select.Option;
const {TextArea} = Input;
const TabPane = Tabs.TabPane;
const Dragger = Upload.Dragger;

/*
* 电影资源管理页面（管理员）
* */
class MovieResourceManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: 'http://via.placeholder.com/300x150?text=post',
            uploadLoading: false,
            deleteLoading: false,
            data: [],
            count: 0,
            selectedMovies: [],
            fileList: [],
        };
    }

    /*
    * 该组件刚在完成时，获取一份电影列表
    * 用于删除页展示
    * */
    componentDidMount() {
        this.fetchDataCount();
        this.fetchData(0);
    }

    /*
    * 在删除也进行页面切换时，进行请求
    * */
    onPageChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.setState({selectedMovies: []});
        this.fetchData(pageNumber - 1);
    }

    /*
    * 分页浏览时，获取当前页的电影数量
    * */
    fetchDataCount() {
        // 获取电影数量 get movie count
        fetch(Api.movieCount(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(info => this.setState({count: info.data}))
            .catch(error => console.error('Error:', error));
    }
    /*
     * 分页浏览时，获取当前页的电影列表
     * */
    fetchData(page) {

        // 获取电影信息列表 get movie info list
        fetch(Api.movieList(page), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/js on',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(info => this.setState({data: info.data}))
            .catch(error => console.error('Error:', error));
    }

    /*
     * 提交电影信息，添加电影
     * */
    handleSubmit(e) {
        e.preventDefault();
        this.setState({uploadLoading: true});

        const formData = this.props.form.getFieldsValue();

        // console.log(formData);

        const title = formData.title;
        const score = formData.score;
        const alias = formData.alias;
        const releaseDate = formData.releaseDate;
        const length = formData.length;
        const director = formData.director.join(" ");
        const screenwriter = formData.screenwriter.join(" ");
        const cast = formData.cast.join(" ");
        const overview = formData.overview;
        const post = formData.post;
        const movieType = formData.movieType;

        fetch(Api.addMovieInfo(movieType), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                title: title,
                score: score,
                alias: alias,
                releaseDate: releaseDate,
                length: length,
                director: director,
                screenwriter: screenwriter,
                cast: cast,
                overview: overview,
                post: post
            })
        }).then(response => response.json())
            .then(info => {
                if (info.status !== 1) {
                    message.error("电影添加失败，请检查电影信息");
                    console.log(`error message: ${info.msg}`);
                } else {
                    message.success("电影添加成功");
                    this.setState({post: 'http://via.placeholder.com/300x150?text=post'});
                    this.props.form.resetFields();
                }
                this.setState({uploadLoading: false});
            });
    };

    /*
    * 海报的 URL 正则判断
    * */
    onHandleChangePostUrl(e) {
        const {value} = e.target;
        const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
        if ((reg.test(value))) {
            this.setState({post: value});
        }
    };

    /*
     * 在删除电影列表记录已经勾选的电影
     * */
    onSelectedMovie(e) {
        const selectedMovies = this.state.selectedMovies;
        const target = e.target;
        if (target.checked) {
            if (selectedMovies.indexOf(target.value) === -1) {
                selectedMovies.push(target.value);
            }
        } else {
            const index = selectedMovies.indexOf(target.value);
            if (index !== -1) {
                selectedMovies.splice(index, 1);
            }
        }
        this.setState({selectedMovies});
    }

    /*
     * 电影删除确认提示
     * */
    onHandleConfirmDeleteTips() {
        const key = `open${Date.now()}`;
        if (this.state.selectedMovies.length === 0) {
            notification.info({
                message: "提醒",
                description: "未选中任何电影",
                duration: 2,
                key,
                placement: "topLeft",
            })
        } else {
            notification.warning(
                {
                    message: '你确认要删除这些电影资源吗？',
                    description: this.state.selectedMovies.join("\n"),
                    key,
                    btn: (<Button icon="delete" type="danger" ghost onClick={() => {
                        notification.close(key);
                        this.onHandleDeleteMovies();
                    }}>
                        确 认 </Button>),
                    placement: "topLeft",
                }
            )
        }
    }

    /*
     * 删除电影，并向后台提交数据
     * */
    onHandleDeleteMovies() {
        const {data, selectedMovies}= this.state;

        for (let i = 0; i < selectedMovies.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (selectedMovies[i] === data[j].title) {
                    data.splice(j, 1);
                }
            }
        }

        this.setState({selectedMovies: [], data, deleteLoading: true});

        fetch(Api.deleteMovies(selectedMovies), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        }).then(response => response.json())
            .then(info => {
                if (info.status !== 1) {
                    message.error("电影删除失败，请刷新");
                    console.log(`error message: ${info.msg}`);
                } else {
                    message.success("电影删除成功");
                }
                this.setState({deleteLoading: false});
            });
    }

    render() {

        // data 为电影列表数据，用于删除页面进行删除
        // count 为单页获取的电影列表，用于分页
        let {data, count} = this.state;

        /* 在异步调用时，函数体内的 this 不是外部的 this，需要转化 */
        const that = this;
        const {getFieldDecorator} = this.props.form;

        /* 通用表单项属性 */
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };

        /* 电影上传属性 */
        const uploadProps = {
            accept: "video／*",
            name: 'file',
            listType: 'text',
            action: Api.uploadMovie(),
            beforeUpload(file, fileList) {
                that.setState(({fileList}) => ({
                    fileList: [...fileList, file],
                }));
                // return false;
                // that.setState({fileList});
            },
            fileList: this.state.fileList,
            customRequest() {
                const {fileList} = that.state;
                const formData = new FormData();
                formData.append("file", fileList[0]);
                const hide = message.loading('资源上传中', 0);
                fetch(Api.uploadMovie(), {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        // "Content-Type": "multipart/form-data"
                    },
                    body: formData,
                })
                    .then(response => response.json())
                    .then(info => {
                        setTimeout(hide, 1);
                        if (info.status !== 1) {
                            message.error("电影上传失败");
                            console.log(`error message: ${info.msg}`);
                        } else {
                            message.success("电影上传成功");
                        }

                    })
                    .catch(error => console.error('Error:', error));
            },
        };

        return (
            <div>
                <IconTitle/>
                <br/>
                <br/>
                <Row>
                    <Col span={5}/>
                    <Col span={14}>
                        <div id="pad">
                            <Divider orientation="left"><h2>电影资源管理</h2></Divider>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<span><Icon type="cloud-upload"/>资源上传</span>} key="1">
                                    <div id="info">
                                        <Form onSubmit={this.handleSubmit.bind(this)}>
                                            <FormItem
                                                {...formItemLayout}
                                                label="电影名">
                                                {getFieldDecorator('title', {
                                                    rules: [{required: true, message: '请输入电影名！'}],
                                                })(
                                                    <Input className="inputFiled"/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="评分"
                                            >
                                                {getFieldDecorator('score')(
                                                    <Slider max="10"
                                                            step="0.1"
                                                            marks={{
                                                                0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
                                                                6: '6', 7: '7', 8: '8', 9: '9', 10: '10'
                                                            }}/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="别名">
                                                {getFieldDecorator('alias', {
                                                    rules: [{required: true, message: '请输入电影别名！'}],
                                                })(
                                                    <Input className="inputFiled"/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="时长"
                                            >
                                                {getFieldDecorator('length', {initialValue: 120})(
                                                    <InputNumber min={1}/>
                                                )}
                                                <span className="ant-form-text"> 分钟</span>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="上映日期">
                                                {getFieldDecorator('releaseDate', {
                                                    rules: [{required: true, message: '请输入电影电影上映日期！'}],
                                                })(
                                                    <Input className="inputFiled"/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="导演">
                                                {getFieldDecorator('director', {
                                                    rules: [{required: true, message: '请输入导演！'}],
                                                })(
                                                    <Select
                                                        mode="tags"
                                                        style={{width: '100%'}}
                                                        tokenSeparators={[',']}/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="编剧">
                                                {getFieldDecorator('screenwriter', {
                                                    rules: [{required: true, message: '请输入编剧！'}],
                                                })(
                                                    <Select
                                                        mode="tags"
                                                        style={{width: '100%'}}
                                                        tokenSeparators={[',']}/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="主演">
                                                {getFieldDecorator('cast', {
                                                    rules: [{required: true, message: '请输入主演！'}],
                                                })(
                                                    <Select
                                                        mode="tags"
                                                        style={{width: '100%'}}
                                                        tokenSeparators={[',']}/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="电影类型"
                                                hasFeedback>
                                                {getFieldDecorator('movieType', {
                                                    rules: [
                                                        {required: true, message: '请选择电影类型！'},
                                                    ],
                                                })(
                                                    <Select mode="tags"
                                                            style={{width: '100%'}}
                                                            tokenSeparators={[',']}
                                                            placeholder="选择电影类型">
                                                        <Option value="剧情">剧情</Option>
                                                        <Option value="喜剧">喜剧</Option>
                                                        <Option value="惊悚">惊悚</Option>
                                                        <Option value="动作">动作</Option>
                                                        <Option value="爱情">爱情</Option>
                                                        <Option value="犯罪">犯罪</Option>
                                                        <Option value="恐怖">恐怖</Option>
                                                        <Option value="冒险">冒险</Option>
                                                        <Option value="悬疑">悬疑</Option>
                                                        <Option value="科幻">科幻</Option>
                                                        <Option value="家庭">家庭</Option>
                                                        <Option value="奇幻">奇幻</Option>
                                                        <Option value="动画">动画</Option>
                                                        <Option value="战争">战争</Option>
                                                        <Option value="历史">历史</Option>
                                                        <Option value="传记">传记</Option>
                                                        <Option value="音乐">音乐</Option>
                                                        <Option value="歌舞">歌舞</Option>
                                                        <Option value="运动">运动</Option>
                                                        <Option value="西部">西部</Option>
                                                        <Option value="纪录片">纪录片</Option>
                                                    </Select>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="剧情">
                                                {getFieldDecorator('overview', {
                                                    rules: [{required: true, message: '请输入剧情！'}],
                                                })(
                                                    <TextArea className="inputFiled" rows={5}/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="海报"
                                                extra={<img src={this.state.post} alt="post"/>}>
                                                {getFieldDecorator('post', {
                                                    rules: [{required: true, message: '请输入海报 URL！'}],
                                                })(
                                                    <Input onChange={this.onHandleChangePostUrl.bind(this)}
                                                           className="inputFiled"/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="电影资源上传"
                                            >
                                                {getFieldDecorator('upload')(
                                                    <Dragger {...uploadProps}>
                                                        <p className="ant-upload-drag-icon">
                                                            <Icon type="inbox"/>
                                                        </p>
                                                        <p className="ant-upload-text">点击此区域上传电影文件</p>
                                                        <p className="ant-upload-hint">所上传电影文件类型为 MP4</p>
                                                    </Dragger>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                wrapperCol={{span: 12, offset: 6}}
                                            >
                                                <Button type="primary" htmlType="submit"
                                                        icon="upload"
                                                        loading={this.state.uploadLoading}> 上 传 </Button>
                                            </FormItem>
                                        </Form>
                                    </div>
                                </TabPane>
                                <TabPane tab={<span><Icon type="delete"/>电影删除</span>} key="2">
                                    <br/>
                                    <br/>
                                    <Spin tip="正在删除电影信息，请稍后" spinning={this.state.deleteLoading}>
                                        <Row>
                                            <Col span={2}/>
                                            <Col span={2}>
                                                <Button icon="delete" type="danger" ghost
                                                        onClick={this.onHandleConfirmDeleteTips.bind(this)}> 删
                                                    除 </Button>
                                            </Col>
                                            <Col span={2}/>
                                            <Col span={10}>
                                                {
                                                    (data[0] == null || count == null) ? <div></div>
                                                        :
                                                        data.map(item =>
                                                            <div id="movieItem">
                                                                <Popover content={<img src={item.post} alt="post"/>}
                                                                         placement="rightTop">
                                                                    <Checkbox value={item.title}
                                                                              onChange={this.onSelectedMovie.bind(this)}
                                                                              key={item.title}>{item.title}</Checkbox>
                                                                    <br/><br/>
                                                                </Popover>
                                                            </div>
                                                        )
                                                }
                                            </Col>
                                        </Row>
                                        <br/>
                                        <br/>
                                        <Row>
                                            <Col span={6}/>
                                            <Col span={10}>
                                                <Pagination defaultCurrent={1} total={count} defaultPageSize={12}
                                                            onChange={this.onPageChange.bind(this)}/>
                                            </Col>
                                        </Row>
                                    </Spin>
                                    <br/>
                                    <br/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={5}/>
                </Row>
            </div>
        )
    }
}

export default MovieResourceManage = Form.create({})(MovieResourceManage);
