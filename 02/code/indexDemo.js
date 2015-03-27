////类的声明其实就是一个function
//function user(){
//	//java 语言的public
//	this.Name = 'uspcat';
//	this.age = 26;
//	//var 就相对于高级语言当中的private
//	var email = "yfc@126.com"
//	this.getEmail = function(){
//		return email;
//	}
//}
//var u = new user();
////alert(u.getEmail())
//
//var person = {
//	name:'yfc'
//	,age:26
//};
//alert(person.name+"  "+person['age'])
(function(){
	Ext.Loader.setConfig({
		enabled:true,
		paths:{
			myApp:'code/ux'
		}
	});
	Ext.onReady(function(){
		/**
		var win = new Ext.window.Window({
				width:400,
				height:300,
				title:'uspcat'
			});
//		win.show();
		//1.得到那个按钮的dom对象
		//2.为按钮对象添加单击的事件
		//3.单击的时候调用对象win的show方法
		Ext.get("myb").on("click",function(){
			win.show();
		});
		*/
//		var o = {
//			say : function(){
//				alert(11111);
//			}
//		}
//		var fn = Ext.Function.alias(o,'say');
//		fn();
//		var win = Ext.create('Ext.window.Window',{
//			width:400,
//			height:300,
//			title:'uspcat'
//		});
//		win.show();

		Ext.get("myb").on("click",function(){
			var win = Ext.create("ux.myWin",{
				title:'my win',
				price:600,
				requires:['ux.myWin']
			});
			//alert(win.getPrice())
		});
		Ext.define("say",{
			cansay:function(){
				alert("hello");
			}
		})
		Ext.define("sing",{
			sing:function(){
				alert("sing hello 123");
			}
		})
		Ext.define('user',{
			mixins :{
				say : 'say',
				sing: 'sing'
			}
		});
		var u = Ext.create("user",{});
		u.cansay();
		u.sing();
		
	});
})();






