package io.innofang.jokul.repositories;

import io.innofang.jokul.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Inno Fang on 2018/4/27.
 */
public interface MovieRepository extends JpaRepository<Movie, Long> {
    Movie findByTitle(String title);
}
