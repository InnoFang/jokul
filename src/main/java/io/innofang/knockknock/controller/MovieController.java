package io.innofang.knockknock.controller;

import io.innofang.knockknock.domain.Movie;
import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.enums.ResultEnum;
import io.innofang.knockknock.exception.MovieNotFoundException;
import io.innofang.knockknock.repositories.MovieRepository;
import io.innofang.knockknock.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping(value = "/movie-list/{page}")
    public Result<List<Movie>> getMovieInfoList(@PathVariable("page") int page) {
        Pageable pageable = PageRequest.of(page, 12);
        Page<Movie> movies = movieRepository.findAll(pageable);
        return ResultUtil.success(ResultEnum.GET_MOVIE_INFO_LIST, movies.getContent());
    }

    @GetMapping(value = "/movie-count")
    public Result<Long> getMovieCount() {
        return ResultUtil.success(ResultEnum.GET_MOVIE_COUNT, movieRepository.count());
    }

    @GetMapping(value = "/{title}")
    public Result<Movie> getMovieDetail(@PathVariable("title") String title) {
        Movie movie = movieRepository.findByTitle(title);
        if (null == movie) {
            throw new MovieNotFoundException(ResultEnum.MOVIE_NOT_FOUND);
        }
        return ResultUtil.success(ResultEnum.GET_MOVIE_DETAIL, movie);
    }

    @PostMapping(value = "/add-movie")
    public Result addMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return ResultUtil.success(ResultEnum.ADD_MOVIE);
    }

    @PostMapping(value = "/delete/{title}")
    public Result deleteMovie(@PathVariable("title") String title) {
        Movie movie = movieRepository.findByTitle(title);
        if (movie == null) {
            return ResultUtil.error(ResultEnum.MOVIE_NOT_FOUND);
        }
        movieRepository.delete(movie);
        return ResultUtil.success(ResultEnum.DELETE_MOVIE);
    }

    @PostMapping(value = "/delete-more/{movies}")
    public Result deleteMovies(@PathVariable("movies") String selectedMovies) {
        for (String movie : selectedMovies.split("&")) {
            Result result = deleteMovie(movie);
            if (!result.getStatus().equals(ResultEnum.DELETE_MOVIE.getStatus())) {
                return result;
            }
        }
        return ResultUtil.success(ResultEnum.DELETE_MORE_MOVIES);
    }

}
