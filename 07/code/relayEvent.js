(function(){
	Ext.onReady(function(){
		Ext.define("children",{
			extend:'Ext.util.Observable',
			constructor:function(){
				this.state = "hungry",//Ŀǰ������״̬ full
				this.setMilk = function(milk){
					this.fireEvent('hungry',milk);
				},
				this.addEvents({'hungry':true}),
				this.addListener("hungry",function(milk){
					if(this.state == 'hungry'){
						this.drink(milk);
					}else{
						alert("�Ҳ���");				
					}
				}),
				this.drink = function(milk){
					alert("�Һȵ���һƿţ��: "+milk);
				}
			}
		});
		var children = Ext.create("children",{});//��������ţ�̹����Ķ���
		//������û���������κμ����¼�
		Ext.define("father",{
			extend:'Ext.util.Observable',
			constructor:function(config){
				this.listeners = config.listeners;
				this.superclass.constructor.call(this,config);
			}
		});
		var father = Ext.create("father",{});
		father.relayEvents(children,['hungry']);
		father.on("hungry",function(){
			alert("�ͺ�����¹�ĺ���ȥҽԺ..");
		});
		//ĸ�׵��ú��ӵĽ���ţ�̵ķ���
		children.setMilk("��¹ţ��");
		
	});
})();


