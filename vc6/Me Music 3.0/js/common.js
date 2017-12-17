<!--
//***********默认设置定义.*********************
tPopWait=10;		//停留tWait豪秒后显示提示。
tPopShow=6000;		//显示tShow豪秒后关闭提示
showPopStep=100;
popOpacity=95;
fontcolor="#333";
bgcolor="#DFF4FF";
bordercolor="#0E91CF";

//***************内部变量定义*****************
sPop=null;curShow=null;tFadeOut=null;tFadeIn=null;tFadeWaiting=null;
document.write("<style type='text/css'id='defaultPopStyle'>");
document.write(".cPopText {  background-color: " + bgcolor + ";color:" + fontcolor + "; border: 1px " + bordercolor + " solid;font-color: font-size: 12px; padding-right: 4px; padding-left: 4px; height: 20px; padding-top: 2px; padding-bottom: 2px; filter: Alpha(Opacity=0)}");
document.write("</style>");


function showPopupText(){
var o=event.srcElement;
	MouseX=event.x;
	MouseY=event.y;
	if(o.alt!=null && o.alt!=""){o.dypop=o.alt;o.alt=""};
        if(o.title!=null && o.title!=""){o.dypop=o.title;o.title=""};
	if(o.dypop!=sPop) {
			sPop=o.dypop;
			clearTimeout(curShow);
			clearTimeout(tFadeOut);
			clearTimeout(tFadeIn);
			clearTimeout(tFadeWaiting);	
			if(sPop==null || sPop=="") {
				dypopLayer.innerHTML="";
				dypopLayer.style.filter="Alpha()";
				dypopLayer.filters.Alpha.opacity=0;	
				}
			else {
				if(o.dyclass!=null) popStyle=o.dyclass 
					else popStyle="cPopText";
				curShow=setTimeout("showIt()",tPopWait);
			}
			
	}
}
function showIt(){
		dypopLayer.className=popStyle;
		dypopLayer.innerHTML=sPop;
		popWidth=dypopLayer.clientWidth;
		popHeight=dypopLayer.clientHeight;
		if(MouseX+12+popWidth>document.body.clientWidth) popLeftAdjust=-popWidth-24
			else popLeftAdjust=0;
		if(MouseY+12+popHeight>document.body.clientHeight) popTopAdjust=-popHeight-24
			else popTopAdjust=0;
		dypopLayer.style.left=MouseX+12+document.body.scrollLeft+popLeftAdjust;
		dypopLayer.style.top=MouseY+12+document.body.scrollTop+popTopAdjust;
		dypopLayer.style.filter="Alpha(Opacity=0)";
		fadeOut();
}

function fadeOut(){
	if(dypopLayer.filters.Alpha.opacity<popOpacity) {
		dypopLayer.filters.Alpha.opacity+=showPopStep;
		tFadeOut=setTimeout("fadeOut()",1);
		}
		else {
			dypopLayer.filters.Alpha.opacity=popOpacity;
			tFadeWaiting=setTimeout("fadeIn()",tPopShow);
			}
}

function fadeIn(){
	if(dypopLayer.filters.Alpha.opacity>0) {
		dypopLayer.filters.Alpha.opacity-=1;
		tFadeIn=setTimeout("fadeIn()",1);
		}
}
document.onmouseover=showPopupText;

//Input Foucus 特效
function fEvent(sType,oInput){
		switch (sType){
			case "focus" :
				oInput.isfocus = true;
			case "mouseover" :
				oInput.style.borderColor = '#9ecc00';
				break;
			case "blur" :
				oInput.isfocus = false;
			case "mouseout" :
				if(!oInput.isfocus){
					oInput.style.borderColor='#84a1bd';
				}
				break;
		}
	}



//播放页面播放器
function player(id){
	document.write("<object classid='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' id='aboutplayer' width='460' height='64'>");
	document.write("<param name='url' value='93me.php?id=" + id + "'>");
	document.write("<param name='volume' value='100'>");
	document.write("<param name='enablecontextmenu' value='0'>");
	document.write("<param name='enableerrordialogs' value='0'>");
	document.write("<param name='loop' value='true' />");
	document.write("</object>");
}

//随机收听音乐
function randPlay(randnum){
	window.open("me.php?randnum="+ randnum,"","scrollbars=yes,width=640,height=410,resizable,scrollbars")
}
//音乐盒删除操作
function delBoxSong(songid){		
	if(confirm("确定要从音乐盒中删除该歌曲吗?")){
		location.href="musicbox.php?action=del&t=" + songid;
	}
}

//后台试听
function playmedia(strID,strURL) {
	strID.replace(" ","%20");
	var objDiv=document.getElementById(strID);
		document.getElementById('player').style.display='block';
		objDiv.innerHTML=makemedia(strURL);
}

//Media Build
function makemedia (strURL) {
	var strHtml;
	
	strHtml ="<object id='MediaPlayer' width='400' height='64' classid='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6'>";
    	strHtml+="<param name='url' value=\""+ strURL +"\">";
    	strHtml+="<param name='volume' value='100'>";
    	strHtml+="<param name='loop' value='true'>";
    	strHtml+="<param name='autoStart' value='-1'>";
        strHtml+="</object>";
        
     
	return strHtml;
}


String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,''); }
var IEBrowser = (window.navigator.userAgent.toLowerCase().indexOf('msie') > -1);
function returnClick(event, rbool)
{
	if (IEBrowser) {
		window.event.returnValue = rbool;
	} else {
		if(!rbool && event.preventDefault) event.preventDefault(); //ff
	}
}
function SearchCheck(form)
{
	if (form.keyword.value.trim() == "") {
		alert("搜索关键字不能为空！");
		form.keyword.focus();
		returnClick(event, false);
	}
	else
	{
    	returnClick(event, true);
	}
 }
//URL 复制
function copyUrl(url){
var test = document.getElementById(url).value;
window.clipboardData.setData("Text",test);
alert("代码获取成功，请粘贴到你的QQ/MSN上推荐给你的好友");
}