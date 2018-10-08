package io.innofang.jokul.utils;


import io.innofang.jokul.domain.Result;
import io.innofang.jokul.enums.ResultEnum;

/**
 * Created by Inno Fang on 2018/4/25.
 */
public class ResultUtil {
    public static <T> Result<T> success(ResultEnum resultEnum, T resultData) {
        Result<T> result = new Result<>();
        result.setStatus(resultEnum.getStatus());
        result.setMsg(resultEnum.getMsg());
        result.setData(resultData);
        return result;
    }

    public static Result success(ResultEnum resultEnum) {
        return success(resultEnum, null);
    }

    public static Result error(ResultEnum resultEnum) {
        Result result = new Result();
        result.setStatus(resultEnum.getStatus());
        result.setMsg(resultEnum.getMsg());
        return result;
    }

    public static Result error(Integer status, String message) {
        Result result = new Result();
        result.setStatus(status);
        result.setMsg(message);
        return result;
    }
}
