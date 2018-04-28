package io.innofang.knockknock.controller;

import io.innofang.knockknock.domain.Movie;
import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.enums.ResultEnum;
import io.innofang.knockknock.repositories.MovieRepository;
import io.innofang.knockknock.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping(value = "/movie_list")
    public Result<List<Movie>> getMovieList() {
        List<Movie> movies = movieRepository.findAll();
        return ResultUtil.success(ResultEnum.GET_MOVIE_LIST, movies);
    }

    @GetMapping(value = "/{title}")
    public Result<Movie> getMovieDetail(@PathVariable("title") String title) {
        Movie movie = movieRepository.findByTitle(title);
        if (null == movie) {

        }
        return ResultUtil.success(ResultEnum.GET_MOVIE_DETAIL, movie);
    }

}
