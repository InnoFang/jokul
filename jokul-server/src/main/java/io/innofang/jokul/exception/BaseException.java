package io.innofang.jokul.exception;

import io.innofang.jokul.enums.ResultEnum;

/**
 * Created by Inno Fang on 2018/4/28.
 */
public class BaseException extends RuntimeException {

    private Integer status;

    public BaseException(ResultEnum resultEnum) {
        this(resultEnum.getStatus(), resultEnum.getMsg());
    }
    public BaseException(ResultEnum resultEnum, Throwable cause) {
        this(resultEnum.getStatus(), resultEnum.getMsg(), cause);
    }

    public BaseException(Integer status, String message) {
        super(message);
        this.status = status;
    }

    public BaseException(Integer status, String message, Throwable cause) {
        super(message, cause);
        this.status = status;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
