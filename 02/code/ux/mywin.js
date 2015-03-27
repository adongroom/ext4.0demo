		Ext.define("ux.myWin",{
			extend:'Ext.window.Window',
			width:400,
			height:300,
			config: {
			   price: 500
			},
			newtitle: 'new uspcat',
			mySetTitle:function(){
				this.title = this.newtitle;
			},
			title:'uspcat',
			initComponent: function() {
				this.mySetTitle();
				this.callParent(arguments);
			}
		})