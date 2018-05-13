/**
 * Created by InnF on 2018/5/12.
 */

const root = 'http://localhost:8080/jokul';

const Api = {
    'movieList': (page) => `${root}/movie-list/${page}`,
    'movieDetail': (title) => `${root}/${title}`,
    'types': () => `${root}/types`,
    'categoryList': (type, page) => `${root}/${type}/${page}`,
    'playMovie': (movie) => `${root}/play/${movie}`,
    'userSignUp':  (username, password) => `${root}/user/sign-up?username=${username}&password=${password}`,
    'userSignIn': (username, password) => `${root}/user/sign-in?username=${username}&password=${password}`,
};

export default Api;