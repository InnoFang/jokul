package io.innofang.knockknock;

import io.innofang.knockknock.services.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class KnockKnockApplication {

    public static void main(String[] args) {
        SpringApplication.run(KnockKnockApplication.class, args);
    }


    @Bean
    CommandLineRunner init(StorageService storageService) {
        return args -> {
            storageService.deleteAll();
            storageService.init();
        };
    }
}
