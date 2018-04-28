package io.innofang.knockknock.properties;

import org.aspectj.lang.annotation.Before;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * Created by Inno Fang on 2018/4/28.
 */

@Component
@ConfigurationProperties(value = "storage")
public class StorageProperties {

    // 文件存储位置
    private String location;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
