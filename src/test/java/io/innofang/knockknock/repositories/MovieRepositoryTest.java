package io.innofang.knockknock.repositories;

import io.innofang.knockknock.domain.Movie;
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
public class MovieRepositoryTest {

    @Autowired
    private MovieRepository movieRepository;

    private List<Movie> movies = new ArrayList<>();

    {
        Movie inception = new Movie();
        inception.setTitle("盗梦空间");
        inception.setScore(9.2);
        inception.setAlias("Inception");
        inception.setReleaseDate("2010-09-01(中国大陆),2010-07-08(伦敦首映),2010-07-16(美国)");
        inception.setLength(148);
        inception.setDirector("克里斯托弗·诺兰");
        inception.setScreenwriter("克里斯托弗·诺兰");
        inception.setCast("莱昂纳多·迪卡普里奥  约瑟夫·高登-莱维特  艾伦·佩吉  渡边谦  汤姆·哈迪  迪利普·劳  玛丽昂·歌迪亚 基里安·墨菲  汤姆·贝伦杰  迈克尔·凯恩  卢卡斯·哈斯  皮特·波斯尔思韦特");
        inception.setOverview("道姆·柯布（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）与同事阿瑟（约瑟夫·戈登-莱维特 Joseph Gordon-Levitt 饰）和纳什（卢卡斯·哈斯 Lukas Haas 饰）在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔（希里安·墨菲 Cillian Murphy 饰）的深层潜意识中种下放弃家族公司、自立门户的想法。为了重返美国，柯布偷偷求助于岳父迈尔斯（迈克尔·凯恩 Michael Caine 饰），吸收了年轻的梦境设计师艾里阿德妮（艾伦·佩吉 Ellen Page 饰）、梦境演员艾姆斯（汤姆·哈迪 Tom Hardy 饰）和药剂师约瑟夫（迪利普·劳 Dileep Rao 饰）加入行动。在一层层...");
        inception.setPost("https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg");
        movies.add(inception);

        Movie bigHero6 = new Movie();
        bigHero6.setTitle("超能陆战队");
        bigHero6.setScore(8.6);
        bigHero6.setAlias("Big Hero 6");
        bigHero6.setReleaseDate("2015-02-28(中国大陆),2014-10-23(东京电影节),2014-11-07(美国)");
        bigHero6.setLength(102);
        bigHero6.setDirector("唐·霍尔  克里斯·威廉姆斯");
        bigHero6.setScreenwriter("乔丹·罗伯茨  丹尼尔·吉尔森  罗伯特·L·贝尔德");
        bigHero6.setCast("斯科特·安第斯  瑞恩·波特  丹尼尔·海尼  T·J·米勒  杰米·钟  小达蒙·韦恩斯  珍尼希斯·罗德里格兹 詹姆斯·克伦威尔  艾伦·图代克  玛娅·鲁道夫  亚布拉哈姆·本鲁比  凯蒂·洛斯  比利·布什  丹尼尔·吉尔森 保罗·布里格斯");
        bigHero6.setOverview("未来世界的超级都市旧京山（San Fransokyo），热爱发明创造的天才少年小宏，在哥哥泰迪的鼓励下参加了罗伯特·卡拉汉教授主持的理工学院机器人专业的入学大赛。他凭借神奇的微型磁力机器人赢得观众、参赛者以及考官的一致好评，谁知突如其来的灾难却将小宏的梦想和人生毁于一旦。大火烧毁了展示会场，而哥哥为了救出受困的卡拉汉教授命丧火场。身心饱受创伤的小宏闭门不出，哥哥生前留下的治疗型机器人大白则成为安慰他的唯一伙伴。原以为微型机器人也毁于火灾，谁知小宏和大白竟意外发现有人在某座废弃工厂内大批量地生产他的发明。 \n　　稍后哥哥的朋友们弗雷德等人也加入进来，他们穿上小宏发明的超级战士战斗装备，和怀有险恶阴谋的神秘对手展开较量……");
        bigHero6.setPost("https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2224568669.jpg");
        movies.add(bigHero6);
    }

    @Test
    @Ignore
    public void testForAddingMovies() {
        for (Movie movie : movies) {
            movieRepository.save(movie);
        }
    }

}