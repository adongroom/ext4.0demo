(function(){
	function createChild(value,name){
		var el = document.createElement("option");
		el.setAttribute("value",value);
		el.appendChild(document.createTextNode(name));
		return el;
	}
	var data = {};
	
	Ext.onReady(function(){
		//1.�õ�city���dom����
		var cityObj = Ext.get("city");
		//2.����Ϊ���city����ע��һ��change
		cityObj.on("change",function(e,select){
			//3.�õ��ı�����ֵ
			var ids =  select.options[select.selectedIndex].value;
			//3.1 ����ȥǰ̨�Ļ�������в�����,��û�е�ʱ����ȥ��̨��
			if(data["city"]){
				//ֱ�Ӳ���
			}else{
				//��ajax
			}
			//4.ajax����Ѻ�̨�����ù���
			Ext.Ajax.request({
				url:'/extjs/extjs!menu.action',
				params:{ids:ids},
				method:'post',
				timeout:4000,
				success:function(response,opts){
					var obj = eval(response.responseText);
					//5.�õ��������ĸ�����area DOM
					var oldObj = Ext.get("area").dom;
					//6.���������
					while(oldObj.length>0){
						oldObj.options.remove(oldObj.length-1);
					}
					//7.�����µ���
					Ext.Array.each(obj,function(o){
						Ext.get('area').dom.appendChild(createChild(o.valueOf(),o.name));
					})
					//8.�Ѵ����ݿ��õ������ݽ���ǰ̨ҳ�滺��
				}
			});
		});
	});
})()