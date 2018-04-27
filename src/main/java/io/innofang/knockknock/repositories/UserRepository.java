package io.innofang.knockknock.repositories;

import io.innofang.knockknock.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Inno Fang on 2018/4/27.
 */
public interface UserRepository extends JpaRepository<User, Long> {
}
