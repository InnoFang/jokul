package io.innofang.knockknock.utils;


import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.enums.ResultEnum;

/**
 * Created by Inno Fang on 2018/4/25.
 */
public class ResultUtil {
    public static <T> Result<T> success(ResultEnum resultEnum, T resultData) {
        Result<T> result = new Result<>();
        result.setStatus(resultEnum.getStatus());
        result.setMsg(resultEnum.getMsg());
        result.setResultData(resultData);
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

}
