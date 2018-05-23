/**
 * Created by InnF on 2018/5/12.
 */

const root = 'http://localhost:8080/jokul';

const Api = {
    'movieList': (page) => `${root}/movie-list/${page}`,
    'movieCount': () => `${root}/movie-count`,
    'movieDetail': (title) => `${root}/${title}`,
    'types': () => `${root}/types`,
    'typeCount': (type) => `${root}/count/${type}`,
    'categoryList': (type, page) => `${root}/${type}/${page}`,
    'playMovie': (movie) => `${root}/play/${movie}`,
    'userSignUp': (username, password, permission) => `${root}/user/sign-up?username=${username}&password=${password}&permission=${permission}`,
    'userSignIn': (username, password, permission) => `${root}/user/sign-in?username=${username}&password=${password}&permission=${permission}`,
};

export default Api;