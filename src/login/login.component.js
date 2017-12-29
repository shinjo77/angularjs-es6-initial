// import loginController from './login.controller';

// import template from './login.php';
import loginController from './login.controller';

// export const DEMO_COMPONENT_NAME = 'loginComponent';

// class loginController {
//     constructor() {
//         alert('test1');
//         // this._title = title;
//         this.$onInit();
//     }

//     $onInit() {
//         console.log('test3');
//     }
// }

// const controller = new loginController();
// function loginController(){
//     alert('test;');
// }


export const loginComponent = {
	templateUrl	: `/src/login/login.html`,
    controller : loginController
	// bindings 	: {
	// 	// demoAttr1 : '=',
	// 	// demoAttr2 : '='
	// },		
	// // controllerAs : 'demoCtrl',
	// controller 	 : loginController
};