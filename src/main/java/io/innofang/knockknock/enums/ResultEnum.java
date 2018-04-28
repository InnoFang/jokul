package io.innofang.knockknock.enums;

/**
 * Created by Inno Fang on 2018/4/25.
 */
public enum ResultEnum {
    SIGN_UP(1, "successfully to add user"),
    SIGN_IN(1, "successfully to login"),
    GET_MOVIE_LIST(1, "successfully to get movie list"),
    USER_DUPLICATE(-1, "user duplicated"),
    USER_MISSED(-1, "user missed"),
    WRONG_PASSWORD(-1, "wrong password"),
    UNKNOWN_ERROR(-1, "unknown"),
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
}
