webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container my-theme\">\n  <mat-sidenav #sidenav class=\"sidenav\" opened=\"true\" mode=\"slide\">\n    <mat-toolbar>\n      <img src=\"/assets/img/eva-160x80-white.png\" alt=\"Eva\" class=\"logo\">\n    </mat-toolbar>\n    <mat-nav-list>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">view_quilt</i> Dashboard\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/stats\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">multiline_chart</i>\n          Stats\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">face</i>\n          Users\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">dvr</i>\n          Videos\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">featured_video</i>\n          Streaming\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">event_note</i>\n          Plan Builder\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a matLine routerLink=\"/dashboard\">\n          <i class=\"material-icons\" style=\"vertical-align: middle;margin-right: 20px;\">settings</i>\n          Settings\n        </a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"content\">\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__ = __webpack_require__("../../../../../src/app/service/chart-data-parsing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_request_service__ = __webpack_require__("../../../../../src/app/service/http-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_stats_video_stats_component__ = __webpack_require__("../../../../../src/app/video-stats/video-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page404_page404_component__ = __webpack_require__("../../../../../src/app/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__circle_progress_circle_progress_component__ = __webpack_require__("../../../../../src/app/circle-progress/circle-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__donught_card_donught_card_component__ = __webpack_require__("../../../../../src/app/donught-card/donught-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    {
        path: 'stats',
        component: __WEBPACK_IMPORTED_MODULE_12__video_stats_video_stats_component__["a" /* VideoStatsComponent */],
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__page404_page404_component__["a" /* Page404Component */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__page404_page404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__video_stats_video_stats_component__["a" /* VideoStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chart_chart_component__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_14__circle_progress_circle_progress_component__["a" /* CircleProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_15__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__donught_card_donught_card_component__["a" /* DonughtCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_http_request_service__["a" /* HttpRequestService */], __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__["a" /* ChartDataParsingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div class=\"cal-cell-top\">\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n</ng-template>\n\n<mwl-calendar-month-view\n[viewDate]=\"viewDate\"\n[events]=\"events\"\n[cellTemplate]=\"customCellTemplate\">\n</mwl-calendar-month-view>"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
        this.events = [];
        this.viewDate = new Date();
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\n<canvas baseChart\n  chartType=\"line\"\n  [labels]=\"graphData.labels\"\n  [colors]=\"lineChartColors\"\n  [datasets]=\"lineChartDatasets\"\n  [options]=\"lineChartOptions\"\n  (chartHover)=\"chartHovered($event)\"\n  (chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_chart_data__ = __webpack_require__("../../../../../src/app/models/chart-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_chart_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_chart_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e, this);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e, this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "lineChartDatasets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "lineChartColors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "lineChartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_chart_data__["GraphData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_chart_data__["GraphData"]) === "function" && _a || Object)
    ], ChartComponent.prototype, "graphData", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("../../../../../src/app/chart/chart.component.html")
        })
    ], ChartComponent);
    return ChartComponent;
    var _a;
}());
/* harmony default export */ __webpack_exports__["a"] = (ChartComponent);
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/circle-progress/circle-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\n  <canvas baseChart chartType=\"doughnut\" [data]=\"data\" [labels]=\"labels\" [options]=\"options\" width=\"50\" height=\"50\"></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/circle-progress/circle-progress.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/circle-progress/circle-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleProgressComponent = (function () {
    function CircleProgressComponent() {
    }
    CircleProgressComponent.prototype.ngOnInit = function () {
        this.clockWise = this.clockWise || true;
        this.from = this.from || 100;
        // this.primaryColor = this.primaryColor || "rgba(36, 112, 250, 1)";
        // this.secondaryColor = this.secondaryColor || "rgba(0, 0, 0, 0)";
        this.value = Number(this.value);
        this.data = this.clockWise ? [this.value, (this.from - this.value)] : [(this.from - this.value), this.value];
        // this.data = [this.value, 100];
        this.labels = this.data;
        this.options = {
            legend: {
                display: false
            },
        };
        // this.dataset = [{
        //   backgroundColor: [
        //     this.primaryColor,
        //     this.secondaryColor,
        //   ]
        // }];
        // console.log(this.dataset)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "from", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "clockWise", void 0);
    CircleProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'circle-progress',
            template: __webpack_require__("../../../../../src/app/circle-progress/circle-progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/circle-progress/circle-progress.component.scss")]
        })
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

//# sourceMappingURL=circle-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"dashboard route-heading\">\n  <h2>Dashboard</h2>\n</mat-toolbar>\n<div class=\"route-content\">\n  <div class=\"cards row clearfix\">\n    <donught-card text=\"User(s)|Watching\" value=\"{{users}}\" from=\"10\" class=\"one-third card\"></donught-card>\n    <donught-card text=\"Users|Drop\" value=\"40\" class=\"one-third card\"></donught-card>\n    <donught-card text=\"Users|Not Interested\" value=\"60\" class=\"one-third card\"></donught-card>\n  </div>\n  <div class=\"cards row clearfix\">\n    <div class=\"two-third card\">\n      <p class=\"center\">Live engagement preview</p>\n      <p class=\"center link\">Average time of update: every 1 sec</p>\n\n      <app-chart\n        [lineChartDatasets]=\"lineChartDatasets\"\n        [lineChartColors]=\"lineChartColors\"\n        [lineChartOptions]=\"lineChartOptions\"\n        [graphData]=\"graphData\">\n      </app-chart>\n\n\n\n    </div>\n    <div class=\"one-third card dark\">\n      <p class=\"center\">User emotion tracking</p>\n      <p class=\"center\">most represented emotions</p>\n      <p class=\"center link\">Live preview for user emotions</p>\n\n      <div class=\"emotion\" *ngFor=\"let emotionStat of emotionsStats; let i = index\">\n        <p>{{emotionStat.label}}\n          <span class=\"float-right\">{{emotionStat.percentage}}%</span>\n        </p>\n        <div class=\"progress\">\n          <div class=\"fill\" [ngStyle]=\"{background: emotionStat.borderColor, width: emotionStat.percentage + '%'}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cards row clearfix\">\n    <users class=\"two-third card\" count=\"{{users}}\"></users>\n    <div class='one-third card dark'>\n      <app-calendar></app-calendar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__ = __webpack_require__("../../../../../src/app/service/chart-data-parsing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_emotions_enum__ = __webpack_require__("../../../../../src/app/models/emotions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__ = __webpack_require__("../../../../../src/app/service/http-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(httpRequestService, chartDataParsingService) {
        this.httpRequestService = httpRequestService;
        this.chartDataParsingService = chartDataParsingService;
        this.alive = true;
        this.users = 0;
    }
    DashboardComponent.prototype.keys = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_1__models_emotions_enum__["a" /* Emotions */]);
        return keys.slice(keys.length / 2);
    };
    DashboardComponent.prototype.stats = function () {
        return [
            'engagement',
            'attention',
            'joy',
            'surprise',
            'anger',
            'sadness'
        ];
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineChartDatasets = this.keys().map(function (chartName) {
            var chartData = _this.chartDataParsingService.getDefault()[chartName];
            chartData.data = [];
            return chartData;
        });
        this.emotionsStats = this.stats().map(function (chartName) {
            var chartData = _this.chartDataParsingService.getDefault()[chartName];
            return chartData;
        });
        this.httpRequestService.getEmotions('api/videos/1/emotions/stats')
            .first() // only gets fired once
            .subscribe(function (data) {
            _this.emotionsStats = _this.emotionsStats.map(function (emotionStat) {
                emotionStat.percentage = data[emotionStat.label].toFixed(1);
                return emotionStat;
            });
        });
        this.httpRequestService.getEmotions('api/videos/1/emotions')
            .first() // only gets fired once
            .subscribe(function (data) {
            var chartDataAllEmotions = _this.chartDataParsingService.parseEmotionsData(data, _this.keys());
            _this.lineChartDatasets = _this.keys().map(function (chartName) {
                var chartData = _this.chartDataParsingService.getDefault()[chartName];
                chartData.data = chartDataAllEmotions[chartName];
                return chartData;
            });
            console.log('this.lineChartDatasets', _this.lineChartDatasets);
        });
        // get our data every subsequent 10 seconds
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["IntervalObservable"].create(1000)
            .takeWhile(function () { return _this.alive; }) // only fires when component is alive
            .subscribe(function () {
            // asking for emotions for chart
            _this.httpRequestService.getEmotions('api/videos/1/emotions').subscribe(function (data) {
                var chartDataAllEmotions = _this.chartDataParsingService.parseEmotionsData(data, _this.keys());
                _this.lineChartDatasets = _this.keys().map(function (chartName) {
                    var chartData = _this.chartDataParsingService.getDefault()[chartName];
                    chartData.data = chartDataAllEmotions[chartName];
                    return chartData;
                });
                console.log('this.lineChartDatasets', _this.lineChartDatasets);
            });
            // asking for stats and percentages
            _this.httpRequestService.getEmotions('api/videos/1/emotions/stats')
                .first() // only gets fired once
                .subscribe(function (data) {
                _this.emotionsStats = _this.emotionsStats.map(function (emotionStat) {
                    emotionStat.percentage = data[emotionStat.label].toFixed(1);
                    return emotionStat;
                });
            });
        });
        this.lineChartColors = [this.lineChartDatasets.map(function (chartsData) { return chartsData.borderColor; })];
        this.lineChartOptions = {
            animation: {
                duration: 10
            },
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.graphData = {
            labels: Array.from(new Array(30), function (val, index) { return String(index); })
        };
        /********** users card and table */
        this.httpRequestService.getEmotions('api/videos/1/users')
            .first() // only gets fired once
            .subscribe(function (data) {
            _this.users = Number(data.users_watching);
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["IntervalObservable"].create(5000)
            .takeWhile(function () { return _this.alive; }) // only fires when component is alive
            .subscribe(function () {
            _this.httpRequestService.getEmotions('api/videos/1/users')
                .subscribe(function (data) {
                _this.users = Number(data.users_watching);
            });
        });
        /********** */
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__["a" /* HttpRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__["a" /* HttpRequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__["a" /* ChartDataParsingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__["a" /* ChartDataParsingService */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/donught-card/donught-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n  <circle-progress value=\"{{value}}\" from=\"{{from}}\" suffix=\"%\"></circle-progress>\n</div>\n<div class=\"context\">\n  <div class=\"count\">{{value}}</div>\n  <div class=\"text\">\n    <div *ngFor=\"let t of text\">\n      {{t}}\n    </div>\n    <small>{{secondary}}</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/donught-card/donught-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donught-card/donught-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonughtCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonughtCardComponent = (function () {
    function DonughtCardComponent() {
    }
    DonughtCardComponent.prototype.ngOnInit = function () {
        this.secondary = this.secondary || '';
        this.from = this.from || 100;
        this.text = this.text.split('|');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DonughtCardComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DonughtCardComponent.prototype, "from", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DonughtCardComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DonughtCardComponent.prototype, "secondary", void 0);
    DonughtCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'donught-card',
            template: __webpack_require__("../../../../../src/app/donught-card/donught-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/donught-card/donught-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DonughtCardComponent);
    return DonughtCardComponent;
}());

//# sourceMappingURL=donught-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/chart-data.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=chart-data.js.map

/***/ }),

/***/ "../../../../../src/app/models/emotions.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emotions; });
var Emotions;
(function (Emotions) {
    // disgust,
    // anger,
    // contempt,
    Emotions[Emotions["engagement"] = 0] = "engagement";
    // fear,
    // joy,
    // sadness,
    // surprise,
    // valence,
    Emotions[Emotions["attention"] = 1] = "attention";
})(Emotions || (Emotions = {}));
//# sourceMappingURL=emotions.enum.js.map

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__("../../../../../src/app/page404/page404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page404/page404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());

//# sourceMappingURL=page404.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/chart-data-parsing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDataParsingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color__ = __webpack_require__("../../../../color/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartDataParsingService = (function () {
    function ChartDataParsingService() {
        this.chartDefaultData = {
            disgust: {
                label: 'disgust',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('red').toString(),
                percentage: 0
            },
            anger: {
                label: 'anger',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('blue').toString(),
                percentage: 0
            },
            contempt: {
                label: 'contempt',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('green').toString(),
                percentage: 0
            },
            engagement: {
                label: 'engagement',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('green').toString(),
                percentage: 0
            },
            fear: {
                label: 'fear',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('black').toString(),
                percentage: 0
            },
            joy: {
                label: 'joy',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('orange').toString(),
                percentage: 0
            },
            sadness: {
                label: 'sadness',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('yellow').toString(),
                percentage: 0
            },
            surprise: {
                label: 'surprise',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('grey').toString(),
                percentage: 0
            },
            valence: {
                label: 'valence',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('red').toString(),
                percentage: 0
            },
            attention: {
                label: 'attention',
                fill: false,
                data: [],
                borderColor: __WEBPACK_IMPORTED_MODULE_0_color___default()('blue').toString(),
                percentage: 0
            },
        };
    }
    ChartDataParsingService.prototype.getDefault = function () {
        return this.chartDefaultData;
    };
    ChartDataParsingService.prototype.parseEmotionsData = function (emotionsData, emotions) {
        var result = {};
        emotions.forEach(function (emotion) {
            // initialize emotionsObject
            result[emotion] = [];
        });
        Array.from(new Array(180), function (val, index) { return String(index); }).slice(Math.max(180 - 30, 1)).forEach(function (time) {
            var emotionsDataInASpecificTime = emotionsData[time];
            emotions.forEach(function (emotion) {
                if (emotionsDataInASpecificTime) {
                    result[emotion].push(emotionsDataInASpecificTime[emotion]);
                }
                else {
                    result[emotion].push(undefined);
                }
            });
        });
        console.log('data recieved', result);
        return result;
    };
    ChartDataParsingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], ChartDataParsingService);
    return ChartDataParsingService;
}());

//# sourceMappingURL=chart-data-parsing.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/http-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestService = (function () {
    function HttpRequestService(http) {
        this.http = http;
        this.DOMAIN = 'http://cphsw-env.7rimk8au7d.us-east-1.elasticbeanstalk.com';
    }
    HttpRequestService.prototype.getEmotions = function (path) {
        return this.http.get(this.DOMAIN + "/" + path);
    };
    HttpRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], HttpRequestService);
    return HttpRequestService;
    var _a;
}());

//# sourceMappingURL=http-request.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Location</th>\n      <th>Content</th>\n      <th>Channel</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <!--  *ngFor=\"#stat of stats\" -->\n      <td class=\"blue\">Denmark</td>\n      <td>Video #1</td>\n      <td>Channel #1</td>\n      <td class=\"green\">Active</td>\n    </tr>\n    <tr *ngIf=\"count == 0\">\n      <!--  *ngFor=\"#stat of stats\" -->\n      <td class=\"blue\">Denmark</td>\n      <td>Video #1</td>\n      <td>Channel #1</td>\n      <td class=\"grey\">Inactive</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_http_request_service__ = __webpack_require__("../../../../../src/app/service/http-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(httpRequestService) {
        this.httpRequestService = httpRequestService;
        this.alive = true;
        this.count = 0;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.users = new Array(Number(this.count));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], UsersComponent.prototype, "count", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_http_request_service__["a" /* HttpRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_http_request_service__["a" /* HttpRequestService */]) === "function" && _a || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-stats/video-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-wrapper\">\n  <app-chart\n  [lineChartDatasets]=\"lineChartDatasets\"\n  [lineChartColors]=\"lineChartColors\"\n  [lineChartOptions]=\"lineChartOptions\"\n  [graphData]=\"graphData\">\n</app-chart>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/video-stats/video-stats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-wrapper {\n  width: 960px;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-stats/video-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__ = __webpack_require__("../../../../../src/app/service/chart-data-parsing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_emotions_enum__ = __webpack_require__("../../../../../src/app/models/emotions.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__ = __webpack_require__("../../../../../src/app/service/http-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeWhile__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideoStatsComponent = (function () {
    function VideoStatsComponent(httpRequestService, chartDataParsingService) {
        this.httpRequestService = httpRequestService;
        this.chartDataParsingService = chartDataParsingService;
        this.alive = true;
    }
    VideoStatsComponent.prototype.keys = function () {
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_1__models_emotions_enum__["a" /* Emotions */]);
        return keys.slice(keys.length / 2);
    };
    VideoStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineChartDatasets = this.keys().map(function (chartName) {
            var chartData = _this.chartDataParsingService.getDefault()[chartName];
            chartData.data = [];
            return chartData;
        });
        this.httpRequestService.getEmotions('api/videos/1/emotions')
            .first() // only gets fired once
            .subscribe(function (data) {
            var chartDataAllEmotions = _this.chartDataParsingService.parseEmotionsData(data, _this.keys());
            _this.lineChartDatasets = _this.keys().map(function (chartName) {
                var chartData = _this.chartDataParsingService.getDefault()[chartName];
                chartData.data = chartDataAllEmotions[chartName];
                return chartData;
            });
            console.log('this.lineChartDatasets', _this.lineChartDatasets);
        });
        // get our data every subsequent 10 seconds
        __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_IntervalObservable__["IntervalObservable"].create(1000)
            .takeWhile(function () { return _this.alive; }) // only fires when component is alive
            .subscribe(function () {
            _this.httpRequestService.getEmotions('api/videos/1/emotions').subscribe(function (data) {
                var chartDataAllEmotions = _this.chartDataParsingService.parseEmotionsData(data, _this.keys());
                _this.lineChartDatasets = _this.keys().map(function (chartName) {
                    var chartData = _this.chartDataParsingService.getDefault()[chartName];
                    chartData.data = chartDataAllEmotions[chartName];
                    return chartData;
                });
                console.log('this.lineChartDatasets', _this.lineChartDatasets);
            });
        });
        this.lineChartColors = [this.lineChartDatasets.map(function (chartsData) { return chartsData.borderColor; })];
        this.lineChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.graphData = {
            labels: Array.from(new Array(180), function (val, index) { return String(index + 1); }).slice(Math.max(180 - 30, 1))
        };
    };
    VideoStatsComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    VideoStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-video-stats',
            template: __webpack_require__("../../../../../src/app/video-stats/video-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-stats/video-stats.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__["a" /* HttpRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_http_request_service__["a" /* HttpRequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__["a" /* ChartDataParsingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_chart_data_parsing_service__["a" /* ChartDataParsingService */]) === "function" && _b || Object])
    ], VideoStatsComponent);
    return VideoStatsComponent;
    var _a, _b;
}());

//# sourceMappingURL=video-stats.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map