package io.innofang.jokul.exception;

import io.innofang.jokul.enums.ResultEnum;

/**
 * Created by Inno Fang on 2018/4/28.
 */
public class MovieNotFoundException extends BaseException {
    public MovieNotFoundException(ResultEnum resultEnum) {
        super(resultEnum);
    }
}
