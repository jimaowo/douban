(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)
	__webpack_require__(16)
	var $app_template$ = __webpack_require__(31)
	var $app_style$ = __webpack_require__(32)
	var $app_script$ = __webpack_require__(33)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
	$app_define$('@app-component/movie-star', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "stars-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "stars"
	      ],
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.stars},
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/images/icon/star.png"
	              },
	              "shown": function () {return this.$item===1}
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": "/Common/images/icon/none-star.png"
	              },
	              "shown": function () {return !(this.$item===1)}
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.score}
	      },
	      "classList": [
	        "star-score"
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  ".stars-container": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-start"
	  },
	  ".stars": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-start",
	    "height": "17px",
	    "marginRight": "24px",
	    "marginTop": "6px"
	  },
	  ".stars image": {
	    "paddingLeft": "3px",
	    "height": "17px",
	    "width": "17px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "stars"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".star-score": {
	    "fontSize": "24px",
	    "color": "#1f3463"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['stars', 'score']
	};}

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Movie = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(12);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Movie = function () {
	    function Movie(url) {
	        _classCallCheck(this, Movie);
	
	        this.url = url;
	    }
	
	    _createClass(Movie, [{
	        key: "getMovieData",
	        value: function getMovieData(cb) {
	            this.cb = cb;
	            _util2.default.http(this.url, this.processDetailData.bind(this));
	        }
	
	        //处理[电影列表]数据
	
	    }, {
	        key: "processListData",
	        value: function processListData(moviesDouban) {
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
	                };
	                movies.push(temp);
	            }
	            return movies;
	        }
	
	        //处理[电影详情]数据
	
	    }, {
	        key: "processDetailData",
	        value: function processDetailData(data) {
	            if (!data) {
	                return;
	            }
	            var director = {
	                avatar: "",
	                name: "",
	                id: ""
	            };
	            if (data.directors[0] != null) {
	                if (data.directors[0].avatars != null) {
	                    director.avatar = data.directors[0].avatars.large;
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
	            };
	            this.cb(movie);
	        }
	
	        /**
	         * 把评分转化成代表五角星的数组
	         * [1,1,1,0,0]
	         */
	
	    }, {
	        key: "convertToStarsArray",
	        value: function convertToStarsArray(stars) {
	            var num = stars.toString().substring(0, 1);
	            var array = [];
	            for (var i = 1; i <= 5; i++) {
	                if (i <= num) {
	                    array.push(1);
	                } else {
	                    array.push(0);
	                }
	            }
	            return array;
	        }
	    }, {
	        key: "convertToCastString",
	        value: function convertToCastString(casts) {
	            var castsjoin = "";
	            for (var idx in casts) {
	                castsjoin = castsjoin + casts[idx].name + " / ";
	            }
	            return castsjoin.substring(0, castsjoin.length - 2);
	        }
	    }, {
	        key: "convertToCastInfos",
	        value: function convertToCastInfos(casts) {
	            var castsArray = [];
	            for (var idx in casts) {
	                var cast = {
	                    img: casts[idx].avatars ? casts[idx].avatars.large : "",
	                    name: casts[idx].name
	                };
	                castsArray.push(cast);
	            }
	            return castsArray;
	        }
	    }]);
	
	    return Movie;
	}();
	
	exports.Movie = Movie;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: { name: appInfo.name, icon: appInfo.icon }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({ message: 'error' });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	/**
	 * http get请求
	 */
	function http(url, callBack) {
	  _system2.default.fetch({
	    url: url,
	    method: 'GET',
	    success: function success(data) {
	      callBack(JSON.parse(data.data));
	    },
	    fail: function fail(data, code) {
	      console.log("http fail, code=" + code);
	    }
	  });
	}
	
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut,
	  http: http
	};

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	var $app_template$ = __webpack_require__(21)
	var $app_style$ = __webpack_require__(22)
	var $app_script$ = __webpack_require__(23)
	
	$app_define$('@app-component/movie-grid', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)
	var $app_template$ = __webpack_require__(18)
	var $app_style$ = __webpack_require__(19)
	var $app_script$ = __webpack_require__(20)
	
	$app_define$('@app-component/movie-box', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "movie-container"
	  ],
	  "events": {
	    "click": "routeDetail"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.movie.coverageUrl}
	      },
	      "classList": [
	        "movie-img"
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.movie.title}
	      },
	      "classList": [
	        "movie-title"
	      ]
	    },
	    {
	      "type": "movie-star",
	      "attr": {
	        "stars": function () {return this.movie.stars},
	        "score": function () {return this.movie.average}
	      }
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  ".movie-container": {
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  ".movie-img": {
	    "width": "200px",
	    "height": "270px"
	  },
	  ".movie-title": {
	    "marginTop": "6px",
	    "fontSize": "24px",
	    "textAlign": "center"
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['movie'],
	    routeDetail: function routeDetail() {
	        _system2.default.push({
	            uri: '/Detail',
	            params: { mID: this.movie.movieId }
	        });
	    }
	};}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "grid-container"
	  ],
	  "events": {
	    "scrollbottom": "loadMoreData"
	  },
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": function () {return this.movieList},
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "movie"
	          },
	          "classList": [
	            "content-item"
	          ],
	          "children": [
	            {
	              "type": "movie-box",
	              "attr": {
	                "movie": function () {return this.$item}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "loadMore"
	      },
	      "classList": [
	        "load-more"
	      ],
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular"
	          },
	          "shown": function () {return this.hasMore}
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.tip}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  ".grid-container": {
	    "flexDirection": "column",
	    "columns": 3,
	    "marginTop": "40px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "25px"
	  },
	  ".content-item": {
	    "marginBottom": "40px"
	  },
	  ".load-more": {
	    "columnSpan": 3,
	    "justifyContent": "center",
	    "paddingTop": "30px",
	    "paddingRight": "0px",
	    "paddingBottom": "100px",
	    "paddingLeft": "0px"
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(12);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _Movie = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['requestUrl'],
	    data: {
	        movieList: {},
	        totalCount: 0,
	        isEmpty: true,
	        hasMore: true,
	        tip: '加载中...',
	        symbol: '?'
	    },
	    onInit: function onInit() {
	        var requestUrl = this.requestUrl;
	        if (requestUrl !== '') {
	            if (requestUrl.indexOf("?") != -1) {
	                this.symbol = '&';
	            }
	            var dataUrl = this.requestUrl + this.symbol + "start=0&count=18";
	            _util2.default.http(dataUrl, this.processDoubanData.bind(this));
	        }
	    },
	
	
	    processDoubanData: function processDoubanData(moviesDouban) {
	        if (moviesDouban.subjects.length < 18) {
	            this.hasMore = false;
	            this.tip = '没有更多了 T.T';
	        }
	        var movies = new _Movie.Movie().processListData(moviesDouban);
	
	        var totalMovies = {};
	
	        if (!this.isEmpty) {
	            totalMovies = this.movieList.concat(movies);
	        } else {
	            totalMovies = movies;
	            this.isEmpty = false;
	        }
	        this.movieList = totalMovies;
	        this.totalCount += 18;
	    },
	
	    loadMoreData: function loadMoreData() {
	        if (this.hasMore) {
	            var nextUrl = this.requestUrl + this.symbol + "start=" + this.totalCount + "&count=18";
	            _util2.default.http(nextUrl, this.processDoubanData.bind(this));
	        } else {
	            this.tip = '没有了你还往下拉.. ←_←';
	        }
	    }
	};}

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	var $app_template$ = __webpack_require__(28)
	var $app_style$ = __webpack_require__(29)
	var $app_script$ = __webpack_require__(30)
	
	$app_define$('@app-component/movie-list', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "movie-list-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "inner-container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "movie-head"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.topic.categoryTitle}
	              },
	              "classList": [
	                "slogan"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "more"
	              ],
	              "events": {
	                "click": "routeMore"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "更多"
	                  },
	                  "classList": [
	                    "more-text"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "/Common/images/icon/arrow-right.png"
	                  },
	                  "classList": [
	                    "more-img"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "movies-container"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.topic.movies},
	              "children": [
	                {
	                  "type": "movie-box",
	                  "attr": {
	                    "movie": function () {return this.$item}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  ".movie-list-container": {
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "backgroundColor": "#ffffff"
	  },
	  ".inner-container": {
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "paddingBottom": "20px"
	  },
	  ".movie-head": {
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "22px",
	    "paddingLeft": "30px",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  ".slogan": {
	    "fontSize": "24px"
	  },
	  ".more-text": {
	    "marginRight": "10px",
	    "fontSize": "24px",
	    "color": "#35AA53"
	  },
	  ".more-img": {
	    "width": "9px",
	    "height": "16px",
	    "marginTop": "10px"
	  },
	  ".movies-container": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px"
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['topic'],
	    routeMore: function routeMore() {
	        _system2.default.push({
	            uri: '/More',
	            params: { category: this.topic.categoryTitle }
	        });
	    }
	};}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "search"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "/Common/images/icon/search.png"
	          },
	          "classList": [
	            "search-img"
	          ]
	        },
	        {
	          "type": "input",
	          "attr": {
	            "id": "search-text",
	            "type": "text",
	            "placeholder": "搜索电影、影人..."
	          },
	          "id": "search-text",
	          "events": {
	            "blur": "doSearch",
	            "change": "setSearchText"
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "/Common/images/icon/x.png"
	          },
	          "classList": [
	            "xx-img"
	          ],
	          "events": {
	            "click": "cancelSearch"
	          },
	          "shown": function () {return this.searchPanelShow}
	        },
	        {
	          "type": "a",
	          "attr": {
	            "show": function () {return this.canSearch},
	            "value": "搜索"
	          },
	          "classList": [
	            "search-btn"
	          ],
	          "events": {
	            "click": "doSearch"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.topicShow}
	      },
	      "classList": [
	        "topic-list"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "movies-template"
	          ],
	          "children": [
	            {
	              "type": "movie-list",
	              "attr": {
	                "topic": function () {return this.inTheaters}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "movies-template"
	          ],
	          "children": [
	            {
	              "type": "movie-list",
	              "attr": {
	                "topic": function () {return this.comingSoon}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "movies-template"
	          ],
	          "children": [
	            {
	              "type": "movie-list",
	              "attr": {
	                "topic": function () {return this.top250}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "movie-grid",
	      "attr": {
	        "requestUrl": function () {return this.searchUrl}
	      },
	      "shown": function () {return this.searchPanelShow}
	    }
	  ]
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".search": {
	    "backgroundColor": "#f2f2f2",
	    "height": "80px",
	    "width": "100%",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  ".search-btn": {
	    "width": "80px",
	    "height": "40px",
	    "marginRight": "30px",
	    "borderRadius": "5px",
	    "backgroundColor": "#eeeeee",
	    "textAlign": "center",
	    "fontSize": "28px"
	  },
	  ".search-img": {
	    "marginLeft": "30px"
	  },
	  ".xx-img": {
	    "height": "30px",
	    "width": "30px",
	    "marginRight": "30px"
	  },
	  ".search input": {
	    "height": "100%",
	    "width": "600px",
	    "marginLeft": "20px",
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "search"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "input"
	        }
	      ]
	    }
	  },
	  ".placeholder": {
	    "fontSize": "14px",
	    "color": "#d1d1d1",
	    "marginLeft": "20px"
	  },
	  ".topic-list": {
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "backgroundColor": "#f2f2f2"
	  },
	  ".movies-template": {
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "marginBottom": "30px"
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _Movie = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    inTheaters: {},
	    comingSoon: {},
	    top250: {},
	    searchUrl: '',
	    searchText: '',
	    topicShow: true,
	    searchPanelShow: false,
	    canSearch: true
	  },
	
	  onInit: function onInit() {
	    var inTheatersUrl = this.$app.$def.gData.dbBaseUrl + "/v2/movie/in_theaters?start=0&count=3";
	    var comingSoonUrl = this.$app.$def.gData.dbBaseUrl + "/v2/movie/coming_soon?start=0&count=3";
	    var top250Url = this.$app.$def.gData.dbBaseUrl + "/v2/movie/top250?start=0&count=3";
	
	    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
	    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
	    this.getMovieListData(top250Url, "top250", "豆瓣Top250");
	  },
	
	  getMovieListData: function getMovieListData(url, settedKey, categoryTitle) {
	    var that = this;
	    _system2.default.fetch({
	      url: url,
	      method: 'GET',
	      success: function success(data) {
	        that.processDoubanData(JSON.parse(data.data), settedKey, categoryTitle);
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	  },
	
	  processDoubanData: function processDoubanData(moviesDouban, settedKey, categoryTitle) {
	    var movies = new _Movie.Movie().processListData(moviesDouban);
	    var readyData = {
	      categoryTitle: categoryTitle,
	      movies: movies
	    };
	    this.$set(settedKey, readyData);
	  },
	
	  setSearchText: function setSearchText(e) {
	    this.searchText = e.text;
	  },
	
	  doSearch: function doSearch(e) {
	    this.topicShow = false;
	    this.searchPanelShow = true;
	    this.canSearch = false;
	    this.searchUrl = this.$app.$def.gData.dbBaseUrl + "/v2/movie/search?q=" + this.searchText;
	  },
	
	  cancelSearch: function cancelSearch() {
	    this.topicShow = true;
	    this.searchPanelShow = false;
	    this.canSearch = true;
	  }
	
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map