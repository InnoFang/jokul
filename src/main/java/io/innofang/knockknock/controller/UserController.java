package io.innofang.knockknock.controller;

import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.domain.User;
import io.innofang.knockknock.enums.ResultEnum;
import io.innofang.knockknock.repositories.UserRepository;
import io.innofang.knockknock.utils.ResultUtil;
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
                         @RequestParam("password") String password) {
        if (null != userRepository.findByUsername(username)) {
            return ResultUtil.error(ResultEnum.USER_DUPLICATE);
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
        return ResultUtil.success(ResultEnum.SIGN_UP);
    }

    @PostMapping(value = "/user/sign-in")
    public Result signIn(@RequestParam("username") String usernamne,
                         @RequestParam("password") String password) {
        User user = userRepository.findByUsername(usernamne);
        if (null == user) {
            return ResultUtil.error(ResultEnum.USER_MISSED);
        }
        if (!user.getPassword().equals(password)) {
            return ResultUtil.error(ResultEnum.WRONG_PASSWORD);
        }
        return ResultUtil.success(ResultEnum.SIGN_IN);
    }
}
