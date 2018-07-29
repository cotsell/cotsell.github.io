webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main_grid\">\n  <!-- Tab -->\n  <div>\n    <div id=\"tab_bar_div\">\n      <a \n        class=\"color_set_button\"\n        [ngClass]=\"{ 'selected_color_set_button': appState.isSimpleColorSetShowed }\"\n        (click)=\"selectSCSState()\">단일 컬러셋</a>\n      <a \n        class=\"color_set_button\"\n        [ngClass]=\"{ 'selected_color_set_button': appState.isGroupColorSetShowed }\"\n        (click)=\"selectGCSState()\">컬러셋 그룹</a>\n    </div>\n  </div>\n  <!-- Main -->\n  <div>\n    <!-- 싱글 컬러셋 출력부 -->\n    <div [hidden]=\"!appState.isSimpleColorSetShowed\">\n      <!-- 싱글 컬러셋 입력폼 -->\n      <div>\n        <form [formGroup]=\"oneColorSetForm\" (ngSubmit)=\"insert()\">\n          <input [formControlName]=\"'title'\" type=\"text\" placeholder=\"Title\"><br>\n          <input [formControlName]=\"'colorValue'\" type=\"text\" placeholder=\"Color value\"><br>\n          <input [formControlName]=\"'text'\" type=\"text\" placeholder=\"Note..\"><br>\n          <button type=\"submit\">버튼</button>\n        </form>\n      </div>\n      <!-- 싱글 컬러셋 출력 -->\n      <div *ngFor=\"let set of colorSets\" id=\"one_color_set_div\">\n        <app-one-color-set \n          [colorSet]=\"set\"\n          (output)=\"receiveOutput($event)\"\n          >\n        </app-one-color-set>\n      </div>\n    </div>\n    <!-- 그룹 컬러셋 출력부 -->\n    <div [hidden]=\"!appState.isGroupColorSetShowed\">\n      <!-- 그룹 컬러셋 입력 폼 -->\n      <div>\n        <button (click)=\"insertNewGroupColorSet()\">새 컬러셋 그룹 추가</button>\n      </div>\n      <!-- 그룹 컬러셋 출력 -->\n      <div *ngFor=\"let group of groupColorSets\" id=\"group_color_set_div\">\n        <app-group-color-set [groupColorSet]=\"group\"></app-group-color-set>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <button (click)=\"checkStore()\">확인</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 50px auto;\n      grid-template-rows: 50px auto; }\n\n#tab_bar_div {\n  display: inline-block;\n  border: none;\n  border-bottom: 1px solid black; }\n\n#one_color_set_div {\n  display: inline-block; }\n\n#group_color_set_div {\n  display: inline-block; }\n\n.color_set_button {\n  border: none;\n  border-bottom: 1px solid black;\n  cursor: pointer; }\n\n.color_set_button:hover {\n  text-decoration: none; }\n\n.color_set_button:active {\n  text-decoration: none; }\n\n.color_set_button:link {\n  text-decoration: none; }\n\n.color_set_button:visited {\n  text-decoration: none; }\n\n.selected_color_set_button {\n  border-bottom: 2px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ngrx_storeInfo__ = __webpack_require__("../../../../../src/app/service/ngrx/storeInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_one_color_set_one_color_set_component__ = __webpack_require__("../../../../../src/app/components/one-color-set/one-color-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/set-reducer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_ngrx_app_state_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/app-state-reducer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_ngrx_group_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/group-reducer.service.ts");
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
    function AppComponent(_store) {
        var _this = this;
        this._store = _store;
        // 단일컬러셋 입력 폼
        this.oneColorSetForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            colorValue: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this._store.select(__WEBPACK_IMPORTED_MODULE_3__service_ngrx_storeInfo__["b" /* getColorSets */]).subscribe(function (state) { _this.colorSets = state; });
        this._store.select(__WEBPACK_IMPORTED_MODULE_3__service_ngrx_storeInfo__["a" /* getAppState */]).subscribe(function (state) { _this.appState = state; });
        this._store.select(__WEBPACK_IMPORTED_MODULE_3__service_ngrx_storeInfo__["c" /* getGroupColor */]).subscribe(function (state) { _this.groupColorSets = state; });
    }
    AppComponent.prototype.insert = function () {
        var colorSet = { id: -1,
            title: this.oneColorSetForm.value.title,
            colorValue: { index: -1, value: this.oneColorSetForm.value.colorValue },
            text: this.oneColorSetForm.value.text };
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__["a" /* AddColorSetAction */](colorSet));
        this.oneColorSetForm.reset();
    };
    AppComponent.prototype.insertNewGroupColorSet = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__service_ngrx_group_reducer_service__["a" /* AddNewGroupColorSet */]());
        console.log(this.groupColorSets);
    };
    AppComponent.prototype.selectSCSState = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__service_ngrx_app_state_reducer_service__["c" /* SelectSimpleColorSetStateAction */]());
    };
    AppComponent.prototype.selectGCSState = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__service_ngrx_app_state_reducer_service__["b" /* SelectGroupColorSetStateAction */]());
    };
    AppComponent.prototype.receiveOutput = function (event) {
        switch (event.msg) {
            case __WEBPACK_IMPORTED_MODULE_4__components_one_color_set_one_color_set_component__["c" /* SAVE_STATE */]:
                this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__["b" /* ModifyColorSetAction */](event.value));
                break;
            case __WEBPACK_IMPORTED_MODULE_4__components_one_color_set_one_color_set_component__["b" /* REMOVE_STATE */]:
                this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__["d" /* RemoveColorSetAction */](event.value));
                break;
        }
    };
    AppComponent.prototype.checkStore = function () {
        console.log(this._store);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/set-reducer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_ngrx_app_state_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/app-state-reducer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_ngrx_group_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/group-reducer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_color_set_color_set_component__ = __webpack_require__("../../../../../src/app/components/color-set/color-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_one_color_set_one_color_set_component__ = __webpack_require__("../../../../../src/app/components/one-color-set/one-color-set.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_group_color_set_group_color_set_component__ = __webpack_require__("../../../../../src/app/components/group-color-set/group-color-set.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_color_set_color_set_component__["a" /* ColorSetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_one_color_set_one_color_set_component__["a" /* OneColorSetComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_group_color_set_group_color_set_component__["a" /* GroupColorSetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* StoreModule */].forRoot({ colorSets: __WEBPACK_IMPORTED_MODULE_5__service_ngrx_set_reducer_service__["c" /* Reducer */],
                    appState: __WEBPACK_IMPORTED_MODULE_6__service_ngrx_app_state_reducer_service__["a" /* Reducer */],
                    groupColorSet: __WEBPACK_IMPORTED_MODULE_7__service_ngrx_group_reducer_service__["c" /* Reducer */] })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/color-set/color-set.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_grid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: auto, auto;\r\n      grid-template-rows: auto, auto;\r\n}\r\n\r\n#color {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n#color_valuee {\r\n  width: 100px;\r\n  height: 30px;\r\n}\r\n\r\n#color_value_edit_divv {\r\n  width: 100px;\r\n  height: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/color-set/color-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main_grid\">\n  <div id=\"color\" [ngStyle]=\"{ 'background-color': colorValue?.value }\"></div>\n  <div>\n    <div \n      [hidden]=\"isEditMode\"\n      id=\"color_value\"\n      >\n      {{ colorValue?.value === '' ? 'Input new color' : colorValue.value }}\n    </div>\n    <div\n      [hidden]=\"!isEditMode\"\n      id=\"color_value_edit_div\"\n      >\n      <input \n        #cv\n        type=\"text\"\n        placeholder=\"Input new color value\"\n        (focusout)=\"outputChangedColorValue(cv)\"\n        [value]=\"colorValue.value\"\n        >\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/color-set/color-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorSetComponent; });
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

var ColorSetComponent = (function () {
    function ColorSetComponent() {
        // @Input('colorValue')
        // set colorValue(value) {
        //   this._colorValue = value;
        //   // this.displayValue = value;
        // }
        // get colorValue() {
        //   return this._colorValue;
        // }
        this.colorValue = { index: -1, value: 'black' };
        this.index = -1;
        this.isEditMode = false;
        this.changedColorValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    ColorSetComponent.prototype.ngOnInit = function () {
        this.colorValue.index = this.index;
        // console.log(`${this.index}: ${this.colorValue}`);
    };
    ColorSetComponent.prototype.outputChangedColorValue = function (ref) {
        // console.log(ref.value);
        var result = { index: this.index, value: ref.value };
        this.changedColorValue.emit(result);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSetComponent.prototype, "colorValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSetComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSetComponent.prototype, "isEditMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ColorSetComponent.prototype, "changedColorValue", void 0);
    ColorSetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-color-set',
            template: __webpack_require__("../../../../../src/app/components/color-set/color-set.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/color-set/color-set.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorSetComponent);
    return ColorSetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/group-color-set/group-color-set.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_grid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: auto, auto, auto, auto, auto;\r\n      grid-template-columns: auto, auto, auto, auto, auto;\r\n  -ms-grid-rows: 30px, 130px, 30px;\r\n      grid-template-rows: 30px, 130px, 30px;\r\n  grid-gap: 10px;\r\n\r\n}\r\n\r\n#edit_mode_main_grid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: auto, auto, auto, auto, auto;\r\n      grid-template-columns: auto, auto, auto, auto, auto;\r\n  -ms-grid-rows: 30px, 130px, 30px, 30px;\r\n      grid-template-rows: 30px, 130px, 30px, 30px;\r\n  grid-gap: 10px;\r\n}\r\n\r\n#title_grid {\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 5;\r\n  grid-column: 1 / 6;\r\n}\r\n\r\n#text_grid {\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 5;\r\n  grid-column: 1 / 6;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/group-color-set/group-color-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div [id]=\"isEditMode === false ? 'main_grid' : 'edit_mode_main_grid'\">\n  <div id=\"title_grid\">\n    <!-- 출력 모드 -->\n    <div [hidden]=\"isEditMode\" (click)=\"isEditMode=true;\">\n      {{ displayGroupColorSet?.title ? displayGroupColorSet.title : 'Plz input title..' }}\n    </div>\n    <div [hidden]=\"!isEditMode\">\n      <input \n        #input_title\n        type=\"text\" \n        [value]=\"displayGroupColorSet.title\"\n        (focusout)=\"displayGroupColorSet.title = input_title.value\"\n        >\n    </div>\n  </div>\n  <!-- 그룹 컬러셋 출력 -->\n  <div *ngFor=\"let color of displayGroupColorSet.colorValue; let i = index;\" >\n  <!-- <div *ngFor=\"let color of displayGroupColorSet.colorValue; let i = index; trackBy: trackByFn\" > -->\n    <app-color-set \n      [colorValue]=\"color\"\n      [index]=\"i\"\n      [isEditMode]=\"isEditMode\"\n      (changedColorValue)=\"receiveChangedColorValue($event)\">\n    </app-color-set>\n  </div>\n  <!-- 텍스트 출력 -->\n  <div id=\"text_grid\">\n    <div [hidden]=\"isEditMode\" (click)=\"isEditMode=true;\">\n      {{ displayGroupColorSet?.text ? displayGroupColorSet.text : 'Plz input text..'}}\n    </div>\n    <div [hidden]=\"!isEditMode\">\n      <input\n        #input_text\n        type=\"text\"\n        [value]=\"displayGroupColorSet.text\"\n        (focusout)=\"displayGroupColorSet.text = input_text.value\"\n        >\n    </div>\n  </div>\n  <!-- 버튼들 -->\n  <div style=\"grid-column: 1 / 3;\" *ngIf=\"isEditMode === true\">\n    <button (click)=\"saveState()\">저장</button>\n  </div>\n  <div style=\"grid-column: 3/ 5;\" *ngIf=\"isEditMode === true\">\n    <button (click)=\"resetState()\">취소</button>\n  </div>\n  <div *ngIf=\"isEditMode === true\">\n    <button (click)=\"removeState()\">삭제</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/group-color-set/group-color-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupColorSetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ngrx_group_reducer_service__ = __webpack_require__("../../../../../src/app/service/ngrx/group-reducer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupColorSetComponent = (function () {
    function GroupColorSetComponent(_store) {
        this._store = _store;
        this.isEditMode = false;
    }
    Object.defineProperty(GroupColorSetComponent.prototype, "groupColorSet", {
        get: function () {
            return this._groupColorSet;
        },
        // 사용하진 않지만, 그냥 예제겸 남김
        // @ViewChildren('app-color-set') colorSets: QueryList<ColorSetComponent>;
        set: function (value) {
            this._groupColorSet = JSON.parse(JSON.stringify(value));
            this.displayGroupColorSet = JSON.parse(JSON.stringify(value));
            // console.log(this._groupColorSet);
            // console.log(this.displayGroupColorSet);
        },
        enumerable: true,
        configurable: true
    });
    GroupColorSetComponent.prototype.ngOnInit = function () {
    };
    GroupColorSetComponent.prototype.receiveChangedColorValue = function (event) {
        this.displayGroupColorSet.colorValue[event.index] = event;
        console.log("group-color-set.component.ts: Child component\uB85C\uBD80\uD130 ChangedColorValue(" + JSON.stringify(event) + ")\uB97C \uBC1B\uC558\uC2B5\uB2C8\uB2E4.");
        console.log("" + this.displayGroupColorSet.colorValue);
    };
    GroupColorSetComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    GroupColorSetComponent.prototype.saveState = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__service_ngrx_group_reducer_service__["b" /* ModifyGroupColorSet */](this.displayGroupColorSet));
        this.isEditMode = false;
    };
    // 취소 버튼을 누르면 원본 값으로 초기화 해줘요.
    GroupColorSetComponent.prototype.resetState = function () {
        this.displayGroupColorSet = JSON.parse(JSON.stringify(this._groupColorSet));
        this.isEditMode = false;
    };
    GroupColorSetComponent.prototype.removeState = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__service_ngrx_group_reducer_service__["d" /* RemoveGroupColorSet */](this.displayGroupColorSet));
        this.isEditMode = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('groupColorSet'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GroupColorSetComponent.prototype, "groupColorSet", null);
    GroupColorSetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-group-color-set',
            template: __webpack_require__("../../../../../src/app/components/group-color-set/group-color-set.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/group-color-set/group-color-set.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], GroupColorSetComponent);
    return GroupColorSetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/one-color-set/one-color-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div [id]=\"isEditMode ? 'edit_mode_main_grid' : 'main_grid'\" >\n  <!-- 타이틀  -->\n  <div id=\"title_div\">\n    <div *ngIf=\"isEditMode === false\" (click)=\"isEditMode=true\">\n      {{ displayColorSet?.title }}\n    </div>\n    <div *ngIf=\"isEditMode === true\">\n      <input\n        #input_title\n        type=\"text\"\n        [value]=\"displayColorSet?.title\"\n        (focusout)=\"displayColorSet.title = input_title.value;\"\n      >\n    </div>\n  </div>\n  <!-- 색 상자와 값 -->\n  <div id=\"color_value_div\">\n    <app-color-set \n      [colorValue]=\"displayColorSet.colorValue\"\n      [isEditMode]=\"isEditMode\"\n      (changedColorValue)=\"receiveChangedColorValue($event)\"\n      >\n    </app-color-set>\n  </div>\n  <!-- 설명 -->\n  <div id=\"text_div\">\n    <div *ngIf=\"isEditMode === false\" (click)=\"isEditMode=true\">\n      {{ displayColorSet?.text }}\n    </div>\n    <div *ngIf=\"isEditMode === true\">\n      <input\n        #input_text\n        type=\"text\"\n        [value]=\"displayColorSet?.text\"\n        (focusout)=\"displayColorSet.text = input_text.value;\"\n      >\n    </div>\n  </div>\n  <!-- isEditMode가 true일때만 나타나는 버튼용 그리드 -->\n  <div *ngIf=\"isEditMode === true\">\n    <button (click)=\"saveState()\">저장</button>\n  </div>\n  <div *ngIf=\"isEditMode === true\">\n    <button (click)=\"resetState()\">취소</button>\n  </div>\n  <div *ngIf=\"isEditMode === true\">\n    <button (click)=\"removeState()\">삭제</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/one-color-set/one-color-set.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto, auto;\n      grid-template-columns: auto, auto;\n  -ms-grid-rows: 50px, auto, 100px;\n      grid-template-rows: 50px, auto, 100px; }\n\n#edit_mode_main_grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto, auto, auto;\n      grid-template-columns: auto, auto, auto;\n  -ms-grid-rows: 50px, auto, 100px, 50px;\n      grid-template-rows: 50px, auto, 100px, 50px; }\n\n#title_div {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-column: 1 / 4; }\n\n#color_value_div {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-column: 1 / 4; }\n\n#text_div {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-column: 1 / 4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/one-color-set/one-color-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColorSetComponent; });
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

var SAVE_STATE = 'saveState';
var REMOVE_STATE = 'removeState';
var OneColorSetComponent = (function () {
    function OneColorSetComponent() {
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.isEditMode = false;
    }
    Object.defineProperty(OneColorSetComponent.prototype, "colorSet", {
        get: function () {
            return this._colorSet;
        },
        set: function (value) {
            this._colorSet = JSON.parse(JSON.stringify(value));
            this.displayColorSet = JSON.parse(JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    OneColorSetComponent.prototype.ngOnInit = function () {
    };
    OneColorSetComponent.prototype.receiveChangedColorValue = function (event) {
        this.displayColorSet.colorValue = event;
    };
    OneColorSetComponent.prototype.saveState = function () {
        console.log(JSON.stringify(this.displayColorSet));
        this.output.emit({ msg: SAVE_STATE, value: this.displayColorSet });
        this.isEditMode = false;
    };
    OneColorSetComponent.prototype.resetState = function () {
        console.log(JSON.stringify(this._colorSet));
        console.log(JSON.stringify(this.displayColorSet));
        this.displayColorSet = JSON.parse(JSON.stringify(this._colorSet));
        this.isEditMode = false;
    };
    OneColorSetComponent.prototype.removeState = function () {
        console.log("removeState(): " + this.displayColorSet);
        this.output.emit({ msg: REMOVE_STATE, value: this.displayColorSet });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], OneColorSetComponent.prototype, "output", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('colorSet'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], OneColorSetComponent.prototype, "colorSet", null);
    OneColorSetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-one-color-set',
            template: __webpack_require__("../../../../../src/app/components/one-color-set/one-color-set.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/one-color-set/one-color-set.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OneColorSetComponent);
    return OneColorSetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/ngrx/app-state-reducer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECT_SIMPLE_COLOR_SET_STATE */
/* unused harmony export SELECT_GROUP_COLOR_SET_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectSimpleColorSetStateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectGroupColorSetStateAction; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Reducer;
var SELECT_SIMPLE_COLOR_SET_STATE = '[APP_STATE] selectSimpleColorSetState';
var SELECT_GROUP_COLOR_SET_STATE = '[APP_STATE] selectGroupColorSetState';
var initialState = { isSimpleColorSetShowed: true,
    isGroupColorSetShowed: false };
var SelectSimpleColorSetStateAction = (function () {
    function SelectSimpleColorSetStateAction() {
        this.type = SELECT_SIMPLE_COLOR_SET_STATE;
    }
    return SelectSimpleColorSetStateAction;
}());

var SelectGroupColorSetStateAction = (function () {
    function SelectGroupColorSetStateAction() {
        this.type = SELECT_GROUP_COLOR_SET_STATE;
    }
    return SelectGroupColorSetStateAction;
}());

function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var appState = { isSimpleColorSetShowed: true,
        isGroupColorSetShowed: false };
    switch (action.type) {
        case SELECT_SIMPLE_COLOR_SET_STATE:
            return Object.assign({}, state, appState);
        case SELECT_GROUP_COLOR_SET_STATE:
            appState.isSimpleColorSetShowed = false;
            appState.isGroupColorSetShowed = true;
            return Object.assign({}, state, appState);
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/service/ngrx/group-reducer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewGroupColorSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveGroupColorSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModifyGroupColorSet; });
/* harmony export (immutable) */ __webpack_exports__["c"] = Reducer;
var ADD_NEW_GROUP_COLOR_SET = '[GROUP] addNewGroupColorSet';
var REMOVE_GROUP_COLOR_SET = '[GROUP] removeGroupColorSet';
var MODIFY_GROUP_COLOR_SET = '[GROUP] modifyGroupColorSet';
var AddNewGroupColorSet = (function () {
    function AddNewGroupColorSet() {
        this.type = ADD_NEW_GROUP_COLOR_SET;
    }
    return AddNewGroupColorSet;
}());

var RemoveGroupColorSet = (function () {
    function RemoveGroupColorSet(payload) {
        this.payload = payload;
        this.type = REMOVE_GROUP_COLOR_SET;
    }
    return RemoveGroupColorSet;
}());

var ModifyGroupColorSet = (function () {
    function ModifyGroupColorSet(payload) {
        this.payload = payload;
        this.type = MODIFY_GROUP_COLOR_SET;
    }
    return ModifyGroupColorSet;
}());

var initialState = [];
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_NEW_GROUP_COLOR_SET:
            var id = state.length === 0 ? 0 : state[state.length - 1].id + 1;
            var newGroup = { id: id,
                title: '',
                text: '',
                colorValue: [{ index: -1, value: 'black' },
                    { index: -1, value: 'black' },
                    { index: -1, value: 'black' },
                    { index: -1, value: 'black' },
                    { index: -1, value: 'black' }] };
            return state.concat([newGroup]);
        case REMOVE_GROUP_COLOR_SET:
            return state.filter(function (item) {
                return item.id !== action.payload.id;
            });
        case MODIFY_GROUP_COLOR_SET:
            var payload_1 = action.payload;
            return state.map(function (item) {
                return item.id === payload_1.id ? Object.assign({}, item, payload_1) : item;
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/service/ngrx/set-reducer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_COLOR_SET */
/* unused harmony export MODIFY_COLOR_SET */
/* unused harmony export REMOVE_COLOR_SET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddColorSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModifyColorSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveColorSetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Reducer; });
var ADD_COLOR_SET = 'add_color_set';
var MODIFY_COLOR_SET = 'modify_color_set';
var REMOVE_COLOR_SET = 'remove_color_set';
var initialState = [];
var AddColorSetAction = (function () {
    function AddColorSetAction(payload) {
        this.payload = payload;
        this.type = ADD_COLOR_SET;
    }
    return AddColorSetAction;
}());

var ModifyColorSetAction = (function () {
    function ModifyColorSetAction(payload) {
        this.payload = payload;
        this.type = MODIFY_COLOR_SET;
    }
    return ModifyColorSetAction;
}());

var RemoveColorSetAction = (function () {
    function RemoveColorSetAction(payload) {
        this.payload = payload;
        this.type = REMOVE_COLOR_SET;
    }
    return RemoveColorSetAction;
}());

var Reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_COLOR_SET:
            var id = state.length === 0 ? 0 : state[state.length - 1].id + 1;
            action.payload.id = id;
            return state.concat([action.payload]);
        case MODIFY_COLOR_SET:
            return state.map(function (item) {
                return item.id === action.payload.id ? action.payload : item;
                // if (item.id === action.payload.id) {
                //   return action.payload;
                // }
            });
        case REMOVE_COLOR_SET:
            return state.filter(function (color_set) {
                return color_set.id !== action.payload.id;
            });
        default:
            return state;
    }
};


/***/ }),

/***/ "../../../../../src/app/service/ngrx/storeInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getColorSets;
/* harmony export (immutable) */ __webpack_exports__["c"] = getGroupColor;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAppState;
// 아마도 module에 등록된 리듀서의 객체가 'redusers'를 통해 들어오는지도 모르겠다.
function getColorSets(redusers) {
    return redusers.colorSets;
}
function getGroupColor(redusers) {
    return redusers.groupColorSet;
}
function getAppState(redusers) {
    return redusers.appState;
}


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map