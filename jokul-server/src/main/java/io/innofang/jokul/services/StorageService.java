package io.innofang.jokul.services;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.util.stream.Stream;

/**
 * Created by Inno Fang on 2018/4/28.
 */
public interface StorageService {
    void init();
    void store(File file);
    void store(MultipartFile file);
    Stream<Path> loadAll();
    Path load(String filename);
    Resource loadAsResource(String filename);
    void deleteAll();
}