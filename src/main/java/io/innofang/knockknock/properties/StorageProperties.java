package io.innofang.knockknock.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Created by Inno Fang on 2018/4/28.
 */

@ConfigurationProperties("storage")
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
