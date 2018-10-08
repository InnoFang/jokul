package io.innofang.jokul.repositories;

import io.innofang.jokul.domain.Movie;
import io.innofang.jokul.domain.Type;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by Inno Fang on 2018/4/27.
 */
public interface TypeRepository extends JpaRepository<Type, Long> {
    Type findByName(String name);

    @Query(nativeQuery = true)
    List<Movie> findMovies(@Param("typeName") String type, Pageable pageable);

    long countByName(String name);
}
