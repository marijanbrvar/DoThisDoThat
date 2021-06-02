/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/screen */ \"./src/ui/screen.js\");\n\nvar LOCAL_STORAGE_JOB_LIST_KEY = 'jobs.lists';\nvar lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_JOB_LIST_KEY)) || [{\n  id: 1,\n  name: 'MyList',\n  active: true,\n  jobtasks: []\n}];\nvar app = new _ui_screen__WEBPACK_IMPORTED_MODULE_0__.default();\n\nvar currentlyActive = function currentlyActive() {\n  var current = lists.findIndex(function (obj) {\n    return obj.active === true;\n  });\n  return current;\n};\n\nvar render = function render() {\n  app.buildHeader('Things need to be done!');\n  app.buildSideList('Job list', lists);\n  app.buildNewJobButton();\n  app.buildDeleteJobButton();\n\n  if (lists.length === 0 || lists[currentlyActive()].jobtasks.length === 0) {\n    app.buildBlankSlate('This is a blank slate', 'Use it to provide information when no dynamic content exists.');\n  }\n\n  if (lists.length !== 0 && lists[currentlyActive()].jobtasks.length !== 0) {\n    app.buildJobItemsList(lists[currentlyActive()].name, lists[currentlyActive()].jobtasks);\n  }\n\n  app.buildNewJobForm();\n};\n\nrender();\nvar newListForm = document.querySelector('#job-form');\nvar jobList = document.querySelector('nav');\nvar deleteJobListButton = document.querySelector('#delete');\nvar newTaskButton = document.querySelector('#new');\nvar hideNewTaskButton = document.querySelector('#cancle');\nvar newTaskForm = document.querySelector('#newtask');\nvar tasksList = document.querySelector('.tasks');\n\nfunction resetActivJobList() {\n  if (lists.length !== 0) {\n    var currentActive = lists.findIndex(function (obj) {\n      return obj.active === true;\n    });\n    lists[currentActive].active = false;\n  }\n}\n\nfunction createJobList(name) {\n  resetActivJobList();\n  return {\n    id: lists.length + 1,\n    name: name,\n    active: true,\n    jobtasks: []\n  };\n}\n\nvar saveAndRefresh = function saveAndRefresh(lists) {\n  localStorage.setItem(LOCAL_STORAGE_JOB_LIST_KEY, JSON.stringify(lists));\n  window.location.reload();\n};\n\nnewListForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var jobName = newListForm.jobInput.value.trim();\n  if (jobName === null || jobName === '') return;\n  var jobList = createJobList(jobName);\n  newListForm.jobInput.value = null;\n  lists.push(jobList);\n  saveAndRefresh(lists);\n  app.addToList('nav', 'a', jobList);\n});\njobList.addEventListener('click', function (e) {\n  var currentId = e.target.id;\n  resetActivJobList();\n  var job = lists.findIndex(function (obj) {\n    return obj.id === parseInt(currentId, 10);\n  });\n  lists[job].active = true;\n  saveAndRefresh(lists);\n});\n\nif (lists.length !== 0) {\n  deleteJobListButton.setAttribute('aria-disabled', 'false');\n  deleteJobListButton.addEventListener('click', function () {\n    lists = lists.filter(function (x) {\n      return x.id !== lists[currentlyActive()].id;\n    });\n    if (lists.length !== 0) lists[0].active = true;\n    if (lists.length === 0) lists = '';\n    saveAndRefresh(lists);\n  });\n  newTaskButton.addEventListener('click', function () {\n    var form = document.querySelector('#newtask');\n    form.style.display = 'block';\n  });\n  hideNewTaskButton.addEventListener('click', function () {\n    var form = document.querySelector('#newtask');\n    form.style.display = 'none';\n  });\n} else {\n  deleteJobListButton.setAttribute('aria-disabled', 'true');\n  newTaskButton.setAttribute('aria-disabled', 'true');\n}\n\nnewTaskForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var title = newTaskForm.title.value;\n  var description = newTaskForm.desc.value;\n  var weigth = newTaskForm.weigth.value;\n  var due = newTaskForm.due.value;\n  if (title === '' || title === null || weigth === '' || weigth === null || due === '' || due === null) return;\n  lists[currentlyActive()].jobtasks.push({\n    id: lists[currentlyActive()].jobtasks.length + 1,\n    title: title,\n    description: description,\n    weigth: weigth,\n    due: due,\n    completed: false\n  });\n  saveAndRefresh(lists);\n});\n\nif (lists[currentlyActive()].jobtasks.length !== 0) {\n  tasksList.addEventListener('click', function (e) {\n    var taskId = e.target.parentElement.id;\n    var currentItem = parseInt(e.target.closest('.Box-row').id, 10);\n    var idx = lists[currentlyActive()].jobtasks.findIndex(function (x) {\n      return x.id === parseInt(taskId, 10);\n    });\n\n    if (lists[currentlyActive()].jobtasks.length === 0 || e.target.hasAttribute('data-status-button')) {\n      var completed = lists[currentlyActive()].jobtasks[idx];\n      completed.completed = !completed.completed;\n      saveAndRefresh(lists);\n    }\n\n    if (lists[currentlyActive()].jobtasks.length === 0 || e.target.parentElement.hasAttribute('data-delete-task')) {\n      var tasks = lists[currentlyActive()].jobtasks.filter(function (x) {\n        return x.id !== currentItem;\n      });\n      lists[currentlyActive()].jobtasks = tasks;\n      saveAndRefresh(lists);\n    }\n\n    if (lists[currentlyActive()].jobtasks.length === 0 || e.target.parentElement.hasAttribute('data-edit-task')) {\n      var form = document.querySelector('#newtask');\n      form.style.display = '';\n      var ct = e.target.parentElement.closest('.Box-row').id;\n      var tidx = lists[currentlyActive()].jobtasks.findIndex(function (x) {\n        return x.id === parseInt(ct, 10);\n      });\n      var task = lists[currentlyActive()].jobtasks[tidx];\n      form.title.value = task.title;\n      form.desc.value = task.description;\n      form.weigth.value = task.weigth;\n      form.due.value = task.due;\n      console.log(task);\n    }\n  });\n}\n\n//# sourceURL=webpack://WebPackTemplate/./src/index.js?");

/***/ }),

/***/ "./src/ui/screen.js":
/*!**************************!*\
  !*** ./src/ui/screen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-nested-ternary */\n\n/* eslint-disable class-methods-use-this */\nvar Screen = /*#__PURE__*/function () {\n  function Screen() {\n    _classCallCheck(this, Screen);\n\n    this.container = document.querySelector('.container');\n    this.container.classList.add('container-md', 'clearfix');\n    this.jobs = document.createElement('div');\n    this.list = document.createElement('div');\n    this.list.setAttribute('id', 'list');\n    this.list.classList.add('col-sm-12', 'col-md-4', 'float-left', 'p-2');\n    this.jobs.classList.add('col-sm-12', 'col-md-8', 'float-left', 'p-2');\n    this.jobs.setAttribute('id', 'jobs');\n    this.container.append(this.list, this.jobs);\n  }\n\n  _createClass(Screen, [{\n    key: \"addToList\",\n    value: function addToList(selector, tagName, text) {\n      var targetElement = document.querySelector(selector);\n      var element = document.createElement(tagName);\n      element.innerText = text.name;\n      element.classList.add('menu-item');\n      element.setAttribute('aria-current', 'page');\n      element.id = text.id;\n      targetElement.appendChild(element);\n      return element;\n    }\n  }, {\n    key: \"buildHeader\",\n    value: function buildHeader(title) {\n      var target = document.querySelector('BODY');\n      var header = document.createElement('div');\n      var headerItem = document.createElement('div');\n      var headerLink = document.createElement('a');\n      headerLink.href = '/';\n      headerLink.classList.add('Header-link');\n      header.classList.add('Header', 'mb-3');\n      headerItem.classList.add('Header-item');\n      headerLink.innerText = title;\n      header.appendChild(headerItem);\n      headerItem.appendChild(headerLink);\n      target.prepend(header);\n      return header;\n    }\n  }, {\n    key: \"buildSideList\",\n    value: function buildSideList(title, jobs) {\n      var target = document.querySelector('#list');\n      var nav = document.createElement('nav');\n      var menuTitle = document.createElement('span');\n      var jobForm = document.createElement('form');\n      var jobInput = document.createElement('input');\n      var jobButton = document.createElement('button');\n      jobButton.classList.add('btn', 'ml-1', 'btn-outline');\n      jobButton.type = 'submit';\n      jobButton.innerText = 'Add';\n      jobInput.classList.add('form-control', 'input-md');\n      jobInput.name = 'jobInput';\n      jobForm.append(jobInput, jobButton);\n      jobForm.setAttribute('id', 'job-form');\n      menuTitle.classList.add('menu-heading', 'color-bg-info');\n      menuTitle.setAttribute('id', 'menu-heading');\n      menuTitle.innerText = title;\n      nav.appendChild(menuTitle);\n      nav.classList.add('menu', 'mt-6');\n      nav.setAttribute('aria-label', 'Person settings');\n      jobs.forEach(function (item) {\n        var link = document.createElement('a');\n        link.classList.add('menu-item');\n\n        if (item.active) {\n          link.setAttribute('aria-current', 'page');\n        }\n\n        link.innerText = item.name;\n        link.setAttribute('id', item.id);\n        nav.appendChild(link);\n      });\n      target.append(nav, jobForm);\n      return nav;\n    }\n  }, {\n    key: \"buildBlankSlate\",\n    value: function buildBlankSlate(title, text) {\n      var blankSlate = document.createElement('div');\n      var blankSlateTitle = document.createElement('h3');\n      var blankSlateText = document.createElement('p');\n      blankSlate.classList.add('blankslate');\n      blankSlateTitle.classList.add('mb-1');\n      blankSlateTitle.innerText = title;\n      blankSlateText.innerText = text;\n      blankSlate.append(blankSlateTitle, blankSlateText);\n      this.jobs.append(blankSlate);\n      return blankSlate;\n    }\n  }, {\n    key: \"buildJobItemsList\",\n    value: function buildJobItemsList(listName, jobsList) {\n      var target = document.querySelector('#jobs');\n      var jobsBox = document.createElement('div');\n      var jobsHeader = document.createElement('div');\n      var jobsTitle = document.createElement('h3');\n      var counter = document.createElement('span');\n      counter.classList.add('Counter', 'Counter--gray-dark', 'ml-2');\n      counter.innerText = jobsList.length;\n      jobsBox.classList.add('Box', 'mb-4', 'tasks');\n      jobsHeader.classList.add('Box-header', 'Box-header--blue');\n      jobsTitle.classList.add('Box-title');\n      jobsTitle.innerText = listName;\n      jobsTitle.appendChild(counter);\n      jobsHeader.appendChild(jobsTitle);\n      jobsBox.appendChild(jobsHeader);\n      jobsList.forEach(function (item) {\n        var boxRow = document.createElement('div');\n        var boxContent = document.createElement('div');\n        var boxTitle = document.createElement('strong');\n        var description = document.createElement('div');\n        var button = document.createElement('button');\n        boxRow.setAttribute('data-tasks-item', '');\n        boxRow.id = item.id;\n        button.classList.add('btn', 'btn-sm');\n        button.setAttribute('data-status-button', '');\n        button.innerText = item.completed ? 'Finished' : 'In progress...';\n        boxRow.classList.add('Box-row', 'd-flex', 'flex-items-center');\n        boxContent.classList.add('flex-auto');\n        description.classList.add('text-small', 'text-gray-light');\n        boxTitle.innerText = item.title;\n        description.innerHTML = \"\\n      <div><strong>Due:</strong> \".concat(item.due, \"</div>\\n      <strong>Desc:</strong> \").concat(item.description, \"\\n      <div class=\\\"text-bold \").concat(item.weigth === 'heigh' ? 'color-text-danger' : item.weigth === 'medium' ? 'color-text-warning' : 'color-text-success', \"\\\"><strong>Priority:</strong> \").concat(item.weigth, \"</div> \\n      <div >\\n      <button class=\\\"btn-octicon ml-0\\\" type=\\\"button\\\" aria-label=\\\"Pencil icon\\\" data-edit-task>\\n      <svg class=\\\"octicon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 16 16\\\" width=\\\"16\\\" height=\\\"16\\\">\\n      <path fill-rule=\\\"evenodd\\\" d=\\\"M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z\\\"></path>\\n      </svg>\\n      </button>\\n      <button class=\\\"btn-octicon ml-0\\\" type=\\\"button\\\" aria-label=\\\"Pencil icon\\\" data-delete-task>\\n      <svg class=\\\"octicon\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 16 16\\\" width=\\\"16\\\" height=\\\"16\\\">\\n      <path fill-rule=\\\"evenodd\\\" d=\\\"M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z\\\"></path>\\n      </svg>\\n      </button>\\n      </div>\\n      \");\n        boxContent.append(boxTitle, description);\n        boxRow.append(boxContent, button);\n        jobsBox.append(boxRow);\n      });\n      target.appendChild(jobsBox);\n      return jobsBox;\n    }\n  }, {\n    key: \"buildNewJobButton\",\n    value: function buildNewJobButton() {\n      var target = document.querySelector('#jobs');\n      var actionBar = document.createElement('div');\n      actionBar.id = 'action-bar';\n      var button = document.createElement('button');\n      actionBar.classList.add('mb-2', 'text-right');\n      button.classList.add('btn', 'btn-outline');\n      button.innerText = 'New Task';\n      button.id = 'new';\n      actionBar.append(button);\n      target.appendChild(actionBar);\n      return button;\n    }\n  }, {\n    key: \"buildDeleteJobButton\",\n    value: function buildDeleteJobButton() {\n      var actionBar = document.querySelector('#action-bar');\n      var button = document.createElement('button');\n      button.classList.add('btn', 'btn-outline', 'mr-2');\n      button.innerText = 'Delete Job';\n      button.id = 'delete';\n      actionBar.prepend(button);\n      return button;\n    }\n  }, {\n    key: \"buildNewJobForm\",\n    value: function buildNewJobForm() {\n      var target = document.querySelector('#jobs');\n      var formBox = document.createElement('form');\n      var formHeader = document.createElement('div');\n      var formTitle = document.createElement('h3');\n      var formBody = document.createElement('div');\n      var formFooter = document.createElement('div');\n      formBody.classList.add('Box-body');\n      formFooter.classList.add('Box-footer', 'text-right');\n      formTitle.classList.add('Box-title');\n      formTitle.innerText = 'New Job Form';\n      formHeader.classList.add('Box-header', 'Box-header--blue');\n      formBox.classList.add('Box');\n      formBox.id = 'newtask';\n      formBox.style.display = 'none';\n      formBody.classList.add('Box-body');\n      formBody.innerHTML = \"\\n    <div class=\\\"form-group\\\">\\n      <div class=\\\"form-group-header\\\">\\n        <label>Title</label>\\n      </div>\\n      <div class=\\\"form-group-body\\\">\\n        <input class=\\\"form-control input-block\\\" type=\\\"text\\\" name=\\\"title\\\">\\n      </div>\\n    </div>\\n    <div class=\\\"form-group\\\">\\n      <div class=\\\"form-group-header\\\">\\n        <label>Description</label>\\n      </div>\\n      <div class=\\\"form-group-body\\\">\\n        <input class=\\\"form-control input-block\\\" type=\\\"text\\\" name=\\\"desc\\\">\\n      </div>\\n    </div>\\n    <div class=\\\"form-group\\\">\\n      <div class=\\\"form-group-header\\\">\\n        <label>Priority</label>\\n      </div>\\n      <div class=\\\"radio-group\\\">\\n      <input class=\\\"radio-input\\\" id=\\\"normal\\\" type=\\\"radio\\\" name=\\\"weigth\\\" value=\\\"normal\\\">\\n      <label class=\\\"radio-label\\\" for=\\\"normal\\\">Normal</label>\\n      <input class=\\\"radio-input\\\" id=\\\"medium\\\" type=\\\"radio\\\" name=\\\"weigth\\\" value=\\\"medium\\\">\\n      <label class=\\\"radio-label\\\" for=\\\"medium\\\">Medium</label>\\n      <input class=\\\"radio-input\\\" id=\\\"height\\\" type=\\\"radio\\\" name=\\\"weigth\\\" value=\\\"heigh\\\">\\n      <label class=\\\"radio-label\\\" for=\\\"height\\\">Heigh</label>\\n    </div>\\n    </div>\\n    \\n    <div class=\\\"form-group\\\">\\n      <div class=\\\"form-group-header\\\">\\n        <label>Due date:</label>\\n      </div>\\n      <div class=\\\"form-group-body\\\">\\n        <input class=\\\"form-control input-block\\\" type=\\\"date\\\" name='due'>\\n      </div>\\n    </div>\\n    \";\n      formFooter.innerHTML = \"\\n    <button class=\\\"btn btn-secondary mr-1\\\" id=\\\"cancle\\\">Cancel</button>\\n    <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit</button>\\n    \";\n      formHeader.append(formTitle);\n      formBox.append(formHeader, formBody, formFooter);\n      target.appendChild(formBox);\n      return formBox;\n    }\n  }], [{\n    key: \"removeFromList\",\n    value: function removeFromList(selector, id) {\n      var targetElement = document.querySelector(selector);\n      var items = Array.from(targetElement.childNodes);\n      var item = items.find(function (i) {\n        return i.id === id;\n      });\n      return item;\n    }\n  }, {\n    key: \"buildForm\",\n    value: function buildForm(selector, placeholder, inputName, btnText) {\n      var targetEl = document.querySelector(selector);\n      var form = document.createElement('form');\n      var input = document.createElement('input');\n      input.classList.add('form-control', 'input-sm');\n      input.type = 'text';\n      input.name = inputName;\n      input.placeholder = placeholder;\n      var button = document.createElement('button');\n      button.classList.add('btn', 'btn-outline', 'btn-sm');\n      button.innerText = btnText;\n      form.append(input, button);\n      targetEl.appendChild(form);\n      return form;\n    }\n  }]);\n\n  return Screen;\n}();\n\n\n\n//# sourceURL=webpack://WebPackTemplate/./src/ui/screen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;