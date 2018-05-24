package io.innofang.knockknock.controller;

import io.innofang.knockknock.repositories.MovieRepository;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.Assert.*;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MovieControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private MovieRepository movieRepository;

    private static void handle(MvcResult handler) {
        System.out.println(handler.getAsyncResult());
    }

    //@Test
    //@Ignore
    //public void getMovieList() throws Exception {
    //    mvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/knockknock/movieinfolist"))
    //            .andDo(MovieControllerTest::handle)
    //            .andExpect(MockMvcResultMatchers.status().isOk());
    //
    //}

    @Test
    @Ignore
    public void findMovieByTitle() {
        //System.out.println(movieRepository.findByTitle("123"));
    }
}