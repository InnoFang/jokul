package io.innofang.knockknock.handle;

import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.enums.ResultEnum;
import io.innofang.knockknock.exception.BaseException;
import io.innofang.knockknock.exception.MovieNotFoundException;
import io.innofang.knockknock.exception.StorageException;
import io.innofang.knockknock.exception.StorageFileNotFoundException;
import io.innofang.knockknock.services.StorageService;
import io.innofang.knockknock.utils.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Inno Fang on 2018/4/28.
 */
@ControllerAdvice
public class ExceptionHandle {

    public static final Logger logger = LoggerFactory.getLogger(ExceptionHandle.class);

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Result handle(Exception e) {
        if (e instanceof BaseException) {
            BaseException exception = (BaseException) e;
            return ResultUtil.error(exception.getStatus(), exception.getMessage());
        }
        logger.error(e.getMessage());
        return ResultUtil.error(ResultEnum.UNKNOWN_ERROR);
    }
}
