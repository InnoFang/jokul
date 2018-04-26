package io.innofang.knockknock.domain;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

/**
 * Created by Inno Fang on 2018/4/25.
 */
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Result<T> {

    private Integer status;

    private String msg;

    private T result_data;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getResultData() {
        return result_data;
    }

    public void setResultData(T result_data) {
        this.result_data = result_data;
    }

    @Override
    public String toString() {
        return "Result{" +
                "status=" + status +
                ", msg='" + msg + '\'' +
                ", result_data=" + result_data +
                '}';
    }
}
