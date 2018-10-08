package io.innofang.jokul.repositories;

import io.innofang.jokul.domain.Type;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class TypeRepositoryTest {

    @Autowired
    private TypeRepository typeRepository;

    private List<Type> typeList = new ArrayList<>();

    @Before
    public void init(){
        typeList.add(new Type("剧情"));
        typeList.add(new Type("喜剧"));
        typeList.add(new Type("惊悚"));
        typeList.add(new Type("动作"));
        typeList.add(new Type("爱情"));
        typeList.add(new Type("犯罪"));
        typeList.add(new Type("恐怖"));
        typeList.add(new Type("冒险"));
        typeList.add(new Type("悬疑"));
        typeList.add(new Type("科幻"));
        typeList.add(new Type("家庭"));
        typeList.add(new Type("奇幻"));
        typeList.add(new Type("动画"));
        typeList.add(new Type("战争"));
        typeList.add(new Type("历史"));
        typeList.add(new Type("传记"));
        typeList.add(new Type("音乐"));
        typeList.add(new Type("歌舞"));
        typeList.add(new Type("运动"));
        typeList.add(new Type("西部"));
        typeList.add(new Type("纪录片"));
    }

    @Test
    @Ignore
    public void testForAddingType() {
        for (Type type : typeList) {
            typeRepository.save(type);
        }
    }
}