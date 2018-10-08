package io.innofang.jokul.controller;

import io.innofang.jokul.domain.Result;
import io.innofang.jokul.domain.User;
import io.innofang.jokul.enums.ResultEnum;
import io.innofang.jokul.repositories.UserRepository;
import io.innofang.jokul.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Inno Fang on 2018/4/28.
 */
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/user/sign-up")
    public Result singUp(@RequestParam("username") String username,
                         @RequestParam("password") String password,
                         @RequestParam("permission") Integer permission) {
        if (null != userRepository.findByUsername(username)) {
            return ResultUtil.error(ResultEnum.USER_DUPLICATE);
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setPermission(permission);
        userRepository.save(user);
        return ResultUtil.success(ResultEnum.SIGN_UP);
    }

    @PostMapping(value = "/user/sign-in")
    public Result signIn(@RequestParam("username") String usernamne,
                         @RequestParam("password") String password,
                         @RequestParam("permission") Integer permission) {
        User user = userRepository.findByUsername(usernamne);
        if (null == user) {
            return ResultUtil.error(ResultEnum.USER_MISSED);
        }
        if (!user.getPassword().equals(password)) {
            return ResultUtil.error(ResultEnum.WRONG_PASSWORD);
        }
        if (!user.getPermission().equals(permission)) {
            return ResultUtil.error(ResultEnum.PERMISSION_DENIED);
        }
        return ResultUtil.success(ResultEnum.SIGN_IN);
    }
}
