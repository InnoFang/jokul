package io.innofang.jokul.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import io.innofang.jokul.domain.Type;

import java.io.IOException;

/**
 * Created by Inno Fang on 2018/4/27.
 */
public class TypeSerialize extends JsonSerializer<Type> {

    @Override
    public void serialize(Type value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeString(value.getName());
    }
}
