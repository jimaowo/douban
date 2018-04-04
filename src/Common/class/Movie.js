import util from '../../util.js';
class Movie {
    constructor(url) {
        this.url = url;
    }

    getMovieData(cb) {
        this.cb = cb;
        util.http(this.url, this.processDetailData.bind(this));
    }

    //处理[电影列表]数据
    processListData(moviesDouban) {
        var movies = [];
        for (var idx in moviesDouban.subjects) {
            var subject = moviesDouban.subjects[idx];
            var title = subject.title;
            if (title.length >= 6) {
                title = title.substring(0, 6) + "...";
            }
            var temp = {
                stars: this.convertToStarsArray(subject.rating.stars),
                title: title,
                average: subject.rating.average,
                coverageUrl: subject.images.large,
                movieId: subject.id
            }
            movies.push(temp)
        }
        return movies;
    }

    //处理[电影详情]数据
    processDetailData(data) {
        if (!data) {
            return;
        }
        var director = {
            avatar: "",
            name: "",
            id: ""
        }
        if (data.directors[0] != null) {
            if (data.directors[0].avatars != null) {
                director.avatar = data.directors[0].avatars.large

            }
            director.name = data.directors[0].name;
            director.id = data.directors[0].id;
        }
        var movie = {
            movieImg: data.images ? data.images.large : "",
            country: data.countries[0],
            title: data.title,
            originalTitle: data.original_title,
            wishCount: data.wish_count,
            commentCount: data.comments_count,
            year: data.year,
            generes: data.genres.join("、"),
            stars: this.convertToStarsArray(data.rating.stars),
            score: data.rating.average,
            directorName: director.name,
            director: director,
            casts: this.convertToCastString(data.casts),
            castsInfo: this.convertToCastInfos(data.casts),
            summary: data.summary
        }
        this.cb(movie);
    }


    /**
     * 把评分转化成代表五角星的数组
     * [1,1,1,0,0]
     */
    convertToStarsArray(stars) {
        var num = stars.toString().substring(0, 1);
        var array = [];
        for (var i = 1; i <= 5; i++) {
            if (i <= num) {
                array.push(1);
            }
            else {
                array.push(0);
            }
        }
        return array;
    }

    convertToCastString(casts) {
        var castsjoin = "";
        for (var idx in casts) {
            castsjoin = castsjoin + casts[idx].name + " / ";
        }
        return castsjoin.substring(0, castsjoin.length - 2);
    }

    convertToCastInfos(casts) {
        var castsArray = []
        for (var idx in casts) {
            var cast = {
                img: casts[idx].avatars ? casts[idx].avatars.large : "",
                name: casts[idx].name
            }
            castsArray.push(cast);
        }
        return castsArray;
    }
}

export { Movie }