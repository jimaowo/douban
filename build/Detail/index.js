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

	__webpack_require__(4)
	var $app_template$ = __webpack_require__(8)
	var $app_style$ = __webpack_require__(9)
	var $app_script$ = __webpack_require__(10)
	
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
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.movie.movieImg}
	      },
	      "classList": [
	        "head-img"
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "head-img-hover"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.movie.title}
	          },
	          "classList": [
	            "main-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return (this.movie.country) + ' · ' + (this.movie.year)}
	          },
	          "classList": [
	            "sub-title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "like"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.wishCount}
	              },
	              "classList": [
	                "highlight-font"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "人喜欢"
	              },
	              "classList": [
	                "plain-font"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.commentCount}
	              },
	              "classList": [
	                "highlight-font"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "条评论"
	              },
	              "classList": [
	                "plain-font"
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
	        "summary"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "original-title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.originalTitle}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flex-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "评分"
	              },
	              "classList": [
	                "mark"
	              ]
	            },
	            {
	              "type": "movie-star",
	              "attr": {
	                "stars": function () {return this.movie.stars},
	                "score": function () {return this.movie.score}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flex-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "导演"
	              },
	              "classList": [
	                "mark"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.directorName}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flex-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "影人"
	              },
	              "classList": [
	                "mark"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.casts}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flex-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "类型"
	              },
	              "classList": [
	                "mark"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.movie.generes}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "hr"
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "synopsis"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "剧情简介"
	          },
	          "classList": [
	            "synopsis-font"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.movie.summary}
	          },
	          "classList": [
	            "summary-content"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": "24px",
	    "color": "#666666"
	  },
	  ".container": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".head-img": {
	    "width": "100%",
	    "height": "320px"
	  },
	  ".head-img-hover": {
	    "width": "100%",
	    "height": "320px",
	    "top": "0px",
	    "left": "0px",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".main-title": {
	    "fontSize": "38px",
	    "marginTop": "50px",
	    "marginLeft": "40px"
	  },
	  ".sub-title": {
	    "fontSize": "28px",
	    "color": "#999999",
	    "marginLeft": "40px",
	    "marginTop": "30px"
	  },
	  ".like": {
	    "display": "flex",
	    "flexDirection": "row",
	    "marginTop": "30px",
	    "marginLeft": "40px"
	  },
	  ".highlight-font": {
	    "color": "#f21146",
	    "fontSize": "22px",
	    "marginRight": "10px"
	  },
	  ".plain-font": {
	    "color": "#666666",
	    "fontSize": "22px",
	    "marginRight": "30px"
	  },
	  ".summary": {
	    "display": "flex",
	    "flexDirection": "column",
	    "marginLeft": "40px",
	    "color": "#777777"
	  },
	  ".original-title": {
	    "color": "#1f3463",
	    "fontSize": "24px",
	    "marginBottom": "40px"
	  },
	  ".flex-row": {
	    "display": "flex",
	    "flexDirection": "row",
	    "marginBottom": "10px"
	  },
	  ".mark": {
	    "marginRight": "30px",
	    "color": "#999999"
	  },
	  ".hr": {
	    "marginTop": "45px",
	    "height": "2px",
	    "width": "100%",
	    "backgroundColor": "#d9d9d9"
	  },
	  ".synopsis": {
	    "marginLeft": "40px",
	    "display": "flex",
	    "flexDirection": "column",
	    "marginTop": "50px",
	    "marginBottom": "50px"
	  },
	  ".synopsis-font": {
	    "color": "#999999"
	  },
	  ".summary-content": {
	    "marginTop": "20px",
	    "marginRight": "40px",
	    "lineHeight": "40px"
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Movie = __webpack_require__(11);
	
	exports.default = {
	  data: {
	    mID: '',
	    movie: {}
	  },
	
	  onInit: function onInit() {
	    var _this = this;
	
	    var url = this.$app.$def.gData.dbBaseUrl + "/v2/movie/subject/" + this.mID;
	    var movie = new _Movie.Movie(url);
	    movie.getMovieData(function (movie) {
	      _this.movie = movie;
	    });
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

/***/ },
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