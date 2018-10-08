package io.innofang.jokul.domain;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    @ColumnDefault("0")
    private Integer permission;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getPermission() {
        return permission;
    }

    public void setPermission(Integer permission) {
        this.permission = permission;
    }
}
