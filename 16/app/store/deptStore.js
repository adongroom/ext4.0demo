Ext.define("AM.store.deptStore",{
	extend:'Ext.data.TreeStore',
	defaultRoodId:'root',
	proxy:{
		type:'ajax',
		url:'/extjs/extjs!getDept.action',
		reader:'json',
		autoLoad:true
	}
});