<!--
//***********Ĭ�����ö���.*********************
tPopWait=10;		//ͣ��tWait�������ʾ��ʾ��
tPopShow=6000;		//��ʾtShow�����ر���ʾ
showPopStep=100;
popOpacity=95;
fontcolor="#333";
bgcolor="#DFF4FF";
bordercolor="#0E91CF";

//***************�ڲ���������*****************
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

//Input Foucus ��Ч
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



//����ҳ�沥����
function player(id){
	document.write("<object classid='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' id='aboutplayer' width='460' height='64'>");
	document.write("<param name='url' value='93me.php?id=" + id + "'>");
	document.write("<param name='volume' value='100'>");
	document.write("<param name='enablecontextmenu' value='0'>");
	document.write("<param name='enableerrordialogs' value='0'>");
	document.write("<param name='loop' value='true' />");
	document.write("</object>");
}

//�����������
function randPlay(randnum){
	window.open("me.php?randnum="+ randnum,"","scrollbars=yes,width=640,height=410,resizable,scrollbars")
}
//���ֺ�ɾ������
function delBoxSong(songid){		
	if(confirm("ȷ��Ҫ�����ֺ���ɾ���ø�����?")){
		location.href="musicbox.php?action=del&t=" + songid;
	}
}

//��̨����
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
		alert("�����ؼ��ֲ���Ϊ�գ�");
		form.keyword.focus();
		returnClick(event, false);
	}
	else
	{
    	returnClick(event, true);
	}
 }
//URL ����
function copyUrl(url){
var test = document.getElementById(url).value;
window.clipboardData.setData("Text",test);
alert("�����ȡ�ɹ�����ճ�������QQ/MSN���Ƽ�����ĺ���");
}