/**
 * Created by InnF on 2018/5/12.
 *
 * 管理所有的后台请求API
 */


/* root url */
const root = 'http://localhost:8080/jokul';

const Api = {
    /* 电影列表， @page：页数 */
    'movieList': (page) => `${root}/movie-list/${page}`,

    /* 电影总数 */
    'movieCount': () => `${root}/movie-count`,

    /* 删除多部电影请求， 使用字符串处理，将内容用 & 连接，@movies：电影内容 */
    'deleteMovies': (movies) => `${root}/delete-more/${movies.join("&")}`,

    /* 删除电影，@title：电影名*/
    'deleteMovie': (title) => `${root}/delete/${title}`,

    /* 添加电影信息，@type：电影类型 */
    "addMovieInfo": (type) => `${root}/add-movie/${type.join("&")}`,

    /* 单部电影详细信息，@title：电影标题 */
    'movieDetail': (title) => `${root}/${title}`,

    /* 获取类型列表 */
    'types': () => `${root}/types`,

    /* 所有电影类型的数量 */
    'typeCount': (type) => `${root}/count/${type}`,

    /* 分类列表，@type：电影类型，@page：页数 */
    'categoryList': (type, page) => `${root}/${type}/${page}`,

    /* 播放电影，@movie：电影名 */
    'playMovie': (movie) => `${root}/play/${movie}`,

    /* 所有已上传电影，可以获取播放资源链接 */
    'uploadMovie': () => `${root}/upload`,

    /* 用户注册，@username：用户名，@password：密码，@permission：用户权限，分为 0（普通用户）和 1（管理员）两种 */
    'userSignUp': (username, password, permission) => `${root}/user/sign-up?username=${username}&password=${password}&permission=${permission}`,

    /* 用户登录，@username：用户名，@password：密码，@permission：用户权限，分为 0（普通用户）和 1（管理员）两种 */
    'userSignIn': (username, password, permission) => `${root}/user/sign-in?username=${username}&password=${password}&permission=${permission}`,
};

export default Api;