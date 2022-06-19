//设置一个全变量用来存放div的id名，间接来存放div的属性值
//简单模式的移动方法
var DivId1=0;
function remove1(targrt){
	if(DivId1){
		var mydiv=document.getElementById(DivId1);
		var computedStyle = document.defaultView.getComputedStyle(mydiv);
		//设置移动规则
		var countdiv=parseInt(mydiv.id);
		if(countdiv%3==0){
			if(targrt.id==(countdiv-1)||targrt.id==(countdiv+3)||targrt.id==(countdiv-3)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="158px 158px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="158px 158px";
					DivId1=0;
				}
			}else{
				DivId1=0;
			}
		}else if(countdiv%3==1){
			if(targrt.id==(countdiv+1)||targrt.id==(countdiv+3)||targrt.id==(countdiv-3)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="158px 158px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="158px 158px";
					DivId1=0;
				}
				}else{
					DivId1=0;
				}
		}else{
			if(targrt.id==(countdiv+1)||targrt.id==(countdiv-1)||targrt.id==(countdiv+3)||targrt.id==(countdiv-3)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="158px 158px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="158px 158px";
					DivId1=0;
				}
			}else{
				DivId1=0;
			}
		}
	}else if(targrt.style.backgroundPosition!="158px 158px"){
		DivId1=targrt.id;
	}
}
//中等模式的移动方法
var DivId2=0;
function remove2(targrt){
	if(DivId2){
		var mydiv=document.getElementById(DivId2);
		var computedStyle = document.defaultView.getComputedStyle(mydiv);
		var countdiv=parseInt(mydiv.id);
		if(countdiv%4==0){
			if(targrt.id==(countdiv-1)||targrt.id==(countdiv+4)||targrt.id==(countdiv-4)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="118px 118px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="118px 118px";
					DivId2=0;
				}
			}else{
				DivId2=0;
			}
		}else if(countdiv%4==1){
			if(targrt.id==(countdiv+1)||targrt.id==(countdiv+4)||targrt.id==(countdiv-4)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="118px 118px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="118px 118px";
					DivId2=0;
				}
			}else{
				DivId2=0;
			}
		}else{
			if(targrt.id==(countdiv+1)||targrt.id==(countdiv-1)||targrt.id==(countdiv+4)||targrt.id==(countdiv-4)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="118px 118px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="118px 118px";
					DivId2=0;
				}
			}else{
				DivId2=0;
			}
		}
	}else if(targrt.style.backgroundPosition!="118px 118px"){
		DivId2=targrt.id;
	}
}
//复杂模式的移动方法
var DivId3=0;
function remove3(targrt){
	if(DivId3){
		var mydiv=document.getElementById(DivId3);
		var computedStyle = document.defaultView.getComputedStyle(mydiv);
		var countdiv=parseInt(mydiv.id);
		if(countdiv%5==0){
			if(targrt.id==(countdiv-1)||targrt.id==(countdiv+5)||targrt.id==(countdiv-5)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="94px 94px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="94px 94px";
					DivId3=0;
				}
			}else{
				DivId3=0;
			}
		}else if(countdiv%5==1){
			if(targrt.id==(countdiv+1)||targrt.id==(countdiv+5)||targrt.id==(countdiv-5)){
				if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="94px 94px"){
					targrt.style.backgroundPosition=computedStyle.backgroundPosition;
					mydiv.style.backgroundPosition="94px 94px";
					DivId3=0;
				}
			}else{
				DivId3=0;
			}
		}else{
		  if(targrt.id==(countdiv+1)||targrt.id==(countdiv-1)||targrt.id==(countdiv+5)||targrt.id==(countdiv-5)){
		  	if(targrt.style.backgroundPosition!=computedStyle.backgroundPosition&&targrt.style.backgroundPosition=="94px 94px"){
		  		targrt.style.backgroundPosition=computedStyle.backgroundPosition;
		  		mydiv.style.backgroundPosition="94px 94px";
		  		DivId3=0;
		  	}
		  }else{
		  	DivId3=0;
		  }	
		}
		
	}else if(targrt.style.backgroundPosition!="94px 94px"){
		DivId3=targrt.id;
	}
}

//简单
function easy(){
	//清楚centerdiv_2下所有子元素
	const item = document.getElementById("centerdiv_2");
	while (item.firstChild) {
	  item.removeChild(item.firstChild);
	}
	//设置游戏页面可见
	document.getElementById("centerdiv_1").style.visibility="visible";
	//div个数跟宽度
	var bgpLength=-158;
	//设置随机数组，用来帮助打乱方块
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.sort(function () {
			return Math.random() - 0.5;
	});
	//创建随机模块
	for(var i=0;i<9;i++){
		//获取backgroundposition的两个值
		var row=parseInt(arr[i]%3);
		var cell=parseInt(arr[i]/3);
		//创建div并为其分配属性
		var div=document.createElement("div");
		div.id=(i+1);
		div.className="bj1";
		if(arr[i]==9){
			div.style.backgroundPosition="158px 158px";
		}else{
			div.style.backgroundPosition=bgpLength*row+'px '+bgpLength*cell+'px';
		}
		//挂载
		document.getElementById("centerdiv_2").appendChild(div);
		div.addEventListener("click",function(){
			remove1(event.target);
		});
	}
}
//中等
function medium(){
	//清楚centerdiv_2下所有子元素
	const item = document.getElementById("centerdiv_2");
	while (item.firstChild) {
	  item.removeChild(item.firstChild);
	}
	//设置游戏页面可见
	document.getElementById("centerdiv_1").style.visibility="visible";
	//div个数跟宽度
	var bgpLength=-118;
	//设置随机数组，用来帮助打乱方块
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16];
	arr.sort(function () {
			return Math.random() - 0.5;
	});
	//创建随机模块
	for(var i=0;i<16;i++){
		//获取backgroundposition的两个值
		var row=parseInt(arr[i]%4);
		var cell=parseInt(arr[i]/4);
		//创建div并为其分配属性
		var div=document.createElement("div");
		div.id=(i+1);
		div.className="bj2";
		if(arr[i]==16){
			div.style.backgroundPosition="118px 118px";
		}else{
			div.style.backgroundPosition=bgpLength*row+'px '+bgpLength*cell+'px';
		}
		//挂载
		document.getElementById("centerdiv_2").appendChild(div);
		div.addEventListener("click",function(){
			remove2(event.target);
		});
	}
}
//复杂
function complex(){
	//清楚centerdiv_2下所有子元素
	const item = document.getElementById("centerdiv_2");
	while (item.firstChild) {
	  item.removeChild(item.firstChild);
	}
	//设置游戏页面可见
	document.getElementById("centerdiv_1").style.visibility="visible";
	//div个数跟宽度
	var bgpLength=-94;
	//设置随机数组，用来帮助打乱方块
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	arr.sort(function () {
			return Math.random() - 0.5;
	});
	//创建随机模块
	for(var i=0;i<25;i++){
		//获取backgroundposition的两个值
		var row=parseInt(arr[i]%5);
		var cell=parseInt(arr[i]/5);
		//创建div并为其分配属性
		var div=document.createElement("div");
		div.id=(i+1);
		div.className="bj3";
		if(arr[i]==25){
			div.style.backgroundPosition="94px 94px";
		}else{
			div.style.backgroundPosition=bgpLength*row+'px '+bgpLength*cell+'px';
		}
		//挂载
		document.getElementById("centerdiv_2").appendChild(div);
		div.addEventListener("click",function(){
			remove3(event.target);
		});
	}
}