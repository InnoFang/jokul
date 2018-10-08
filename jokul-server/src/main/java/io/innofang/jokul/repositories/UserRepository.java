package io.innofang.jokul.repositories;

import io.innofang.jokul.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Inno Fang on 2018/4/27.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
