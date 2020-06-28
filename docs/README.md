<div align="center">

<img src="https://cdn.jsdelivr.net/gh/innofang/jokul/jokul-client/src/images/JOKUL.png"/>
<br />
<br />
<strong>A movie site built by spring boot and react.js based on <a href="https://github.com/InnoFang/jokul/tree/master/client">front-end</a> and <a href="https://github.com/InnoFang/jokul/tree/master/src">back-end</a> separation.</strong>
<br />
<br />
<img src="https://img.shields.io/badge/spring%20boot-2.0.1.RELEASE-green.svg"/>   <img src="https://img.shields.io/badge/react-16.3.2-blue.svg"/> <img src="https://img.shields.io/badge/react--router--dom-4.2.2-orange.svg"/> <img src="https://img.shields.io/badge/antd-3.4.4-85C1E9.svg"/>  <img src="https://img.shields.io/badge/Maven-3.5.3-%23CD6155.svg"/>

</div>

<br />

## How to run

**Firstly, clone it**

```
> $ git clone git@github.com:InnoFang/jokul.git
> $ cd jokul
```

**Secondly, add data and modify configuration**

For the first run, the server data is empty. You have to add data by yourself and configure your local movie resource.

Luckily, you can use the [test data](https://github.com/InnoFang/jokul/tree/04cd37b3958b04f4f40fa9fb10f6522390ca1c64/src/test/java/io/innofang/knockknock/repositories), But you have to pay attention to the following points :

 + You need to run the `TypeRepositoryTest` file first, then run the `MovieRepositoryTest` file, because there is a dependency on `Type` in `Movie`.
 + The test methods mentioned in the above documents are tagged `@Ignore`, so you need to comment out the annotation before running the test data.

After that, set your MySql information and your local movie resource in [application.yml](https://github.com/InnoFang/jokul/blob/410a0b225bca32a41c444d783087adb22a3245bc/src/main/resources/application.yml)

What must be mentioned is that the role of `storage.resource` in the [application.yml](https://github.com/InnoFang/jokul/blob/410a0b225bca32a41c444d783087adb22a3245bc/src/main/resources/application.yml)

```
storage:
  location: upload-dir
  source: E:/Movie/%s.mp4
```

The value of `source` is a string template that indicate the location and type/suffix of your movies.In this project, The suffix of the movie file must be mp4, and all of the movie in the directory, for me is  the `E:/Movie/` in my computer , which must be named same as the title of movie in your database, otherwise it cannot find and load the movie source correctly when you want to play it.

**Thirdly, deploy server**

Use maven

```
> $ mvn spring-boot:run
```

After a while, you can access the server data.

Reference the [Server data interface](../server_data_interfaces.md)

**Last but not least, run the client**

```
> $ cd client
```

You can use npm

```
> $ npm start
```

or yarn


```
> $ yarn start
```

Wait few seconds, you can see it in your browser and the url is `http://localhost:3000`

## Server data interface

 + Get movie list ***GET*** `http://localhost:8080/jokul/movie-list/{page}` 
 + Get movie detail ***GET*** `http://localhost:8080/jokul/{title}`
 + Upload movie file ***POST*** `http://localhost:8080/jokul/play/{movie}`
 + Get all the movie types ***GET*** `http://localhost:8080/jokul/types`
 + Get a list of movies by type ***GET*** `http://localhost:8080/jokul/{type}/{page}`
 + Get resource links for all the uploaded movies ***GET*** `http://localhost:8080/jokul/movie-src-list`

 [Detail](server_data_interfaces.md)

 [More](https://github.com/InnoFang/jokul/blob/master/jokul-client/src/Api.js)
 
<br />

## Screenshot

<div align="center">

> Home Page


![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/home.jpg)

<br />
<br />

> Sign In

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/sign_in.jpg)

<br />
<br />

> Category Page

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/category.jpg)

<br />
<br />

> Add Movie Information and Resource

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/add_movie.jpg)

<br />
<br />

> Delete Movie Information

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/delete_movie.jpg)

<br />
<br />


> Movie Detail Page

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/movie_detail.jpg)

<br />
<br />

> Download the Movie

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/movie_download.jpg)

<br />
<br />

> Play a Movie

![](https://cdn.jsdelivr.net/gh/innofang/jokul/screenshot/play_movie.jpg)

<br />
<br />

</div>

## [License](https://github.com/InnoFang/jokul/blob/master/LICENSE)

           Copyright 2018 InnoFang

           Licensed under the Apache License, Version 2.0 (the "License");
           you may not use this file except in compliance with the License.
           You may obtain a copy of the License at

               http://www.apache.org/licenses/LICENSE-2.0

           Unless required by applicable law or agreed to in writing, software
           distributed under the License is distributed on an "AS IS" BASIS,
           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           See the License for the specific language governing permissions and
           limitations under the License.