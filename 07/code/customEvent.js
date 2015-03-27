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
		Ext.util.Observable.capture(children,function(eventName){
			if(eventName == "hungry"){
				alert('�������ţ�̹������ܺ�ţ��...');
				return false;
			}else{
				return true;
			}
		})
		//ĸ�׵��ú��ӵĽ���ţ�̵ķ���
		children.setMilk("��¹ţ��");
		
	});
	/***
	 * Ϊ�������һ���¼�addEvents-->�¼��ļ�����ʽע������¼�addListener-->����������¼��Ķ���fireEvent
	 */
})();


