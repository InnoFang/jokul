package io.innofang.knockknock.exception;

/**
 * Created by Inno Fang on 2018/4/28.
 */
public class StorageException extends BaseException {

    public StorageException(Integer status, String message) {
        super(status, message);
    }

    public StorageException(Integer status, String message, Throwable cause) {
        super(status, message, cause);
    }
}
