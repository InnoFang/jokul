package io.innofang.knockknock.controller;

import io.innofang.knockknock.domain.Movie;
import io.innofang.knockknock.domain.Result;
import io.innofang.knockknock.domain.Type;
import io.innofang.knockknock.enums.ResultEnum;
import io.innofang.knockknock.repositories.TypeRepository;
import io.innofang.knockknock.utils.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Created by Inno Fang on 2018/5/9.
 */
@RestController
public class TypeController {

    @Autowired
    private TypeRepository typeRepository;

    @GetMapping(value = "/{type}/{page}")
    public Result<List<Movie>> getMovieListByType(@PathVariable("type") String type,
                                                @PathVariable("page") int page) {
        List<Movie> movies = typeRepository.findMovies(type, PageRequest.of(page, 12));
        return ResultUtil.success(ResultEnum.GET_MOVIE_TYPE_LIST, movies);
    }

}
