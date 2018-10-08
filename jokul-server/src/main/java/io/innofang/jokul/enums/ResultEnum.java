package io.innofang.jokul.enums;

/**
 * Created by Inno Fang on 2018/4/25.
 */
public enum ResultEnum {
    SIGN_UP(1, "successfully to add user"),
    SIGN_IN(1, "successfully to login"),
    GET_MOVIE_INFO_LIST(1, "successfully to get movie info list"),
    GET_MOVIE_TYPE_LIST(1, "successfully to get movie type list"),
    GET_MOVIE_SRC_LIST(1, "successfully to get movie source list"),
    GET_MOVIE_DETAIL(1, "successfully to get movie detail"),
    GET_TYPES(1, "successfully to get types"),
    UPLOAD_MOVIE_FILE(1, "successfully to load movie file"),
    ADD_MOVIE(1, "successfully to add movie"),
    DELETE_MOVIE(1, "successfully to delete movie"),
    DELETE_MORE_MOVIES(1, "successfully to delete more movies"),
    GET_MOVIE_COUNT(1, "successfully to get movie count"),
    GET_TYPE_COUNT(1, "successfully to get type count"),
    USER_DUPLICATE(-1, "user duplicated"),
    USER_MISSED(-1, "user missed"),
    WRONG_PASSWORD(-1, "wrong password"),
    PERMISSION_DENIED(-1, "permission denied"),
    UNKNOWN_ERROR(-1, "unknown"),
    MOVIE_NOT_FOUND(-1, "movie not found"),
    MOVIE_DUPLICATE(-1, "movie duplicate"),
    ;
    private Integer status;
    private String msg;

    ResultEnum(Integer code, String msg) {
        this.status = code;
        this.msg = msg;
    }

    public Integer getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
