package io.innofang.jokul.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.innofang.jokul.utils.TypeSerialize;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Inno Fang on 2018/4/27.
 */
@Entity
@SqlResultSetMapping(
        name = "Movie",
        classes = {
                @ConstructorResult(
                        targetClass = Movie.class,
                        columns = {
                                @ColumnResult(name = "title", type = String.class),
                                @ColumnResult(name = "score", type = Double.class),
                                @ColumnResult(name = "post", type = String.class),
                        }
                )
        }
)
@NamedNativeQuery(
        name = "Type.findMovies",
        query = "select movie.title, movie.score, movie.post " +
                "from movie, type, movie_type " +
                "where movie_type.type_id=type.id " +
                "and movie_type.movie_id=movie.id " +
                "and type.name=:typeName",
        resultSetMapping = "Movie"
)
@JsonSerialize(using = TypeSerialize.class)
public class Type {

    @JsonIgnore
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String name;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "movie_type",
            joinColumns = @JoinColumn(name = "type_id"),
            inverseJoinColumns = @JoinColumn(name = "movie_id"))
    private Set<Movie> movies;

    public Type() {
    }

    public Type(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
    }
}
