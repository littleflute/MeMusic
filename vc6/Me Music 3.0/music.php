<?php

require("global.php");



$playid=$_POST['id'];

$playnum=count($playid);

if($playnum==0){

  echo "你还未选择歌曲!";

  exit;

}

?>



<html>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=gb2312">

<title>== Me Music 音乐播放器 ==</title>

<meta name="Author" content="93Me">

<meta name="keywords" content="Me Music,魅E音乐系统,93me.com,Me Music V3.0,魅E音乐播放器">

<meta name="description" content="asf,asx,wma,wmx,wmv,wvx,mp3,wav,mid,93me.com,Me Music V3.0,魅E音乐播放器">

<LINK href="images/player.css" type=text/css rel=stylesheet>

<script language="JavaScript" src="js/exobud.js"></script>

<script language="JScript" for="Exobud" event="openStateChange(sf)">evtOSChg(sf);</script>

<script language="JScript" for="Exobud" event="playStateChange(ns)">evtPSChg(ns);</script>

<script language="JScript" for="Exobud" event="error()">evtWmpError();</script>

<script language="JScript" for="Exobud" event="Buffering(bf)">evtWmpBuff(bf);</script>

<SCRIPT Language="JavaScript" src="js/set.js"></SCRIPT>

<? 

   $msg=@file("".$datadir."/list.php");

   $total=count($msg); 

  echo "<script language=Javascript>\n";



for($i=0;$i<$total;$i++)

	{  

	 $flag=0 ;

	 list($songname,$singer,$songid,$addtime)=explode("|",$msg[$i]);

    

	 for($j=0;$j<=$playnum;$j++)

		if($playid[$j]==$songid) { $flag=1; break; }

		if($flag==0) continue; 



	  $songinfo=@file("".$datadir."/data/".$songid.".php");

	  list($catid,$singerid,$songname,$songurl,$hot,$commend,$times)=explode("|",$songinfo[1]);

	  $song="mkList(\"".$songurl."\",\"".$songname."\");\n" ;

      echo $song;

   } 



echo "</script>\n";  



?>

<script language="JavaScript" src="js/imgchg.js"></script>



<META content="MSHTML 6.00.6000.16544" name=GENERATOR></HEAD>

<BODY onLoad="initExobud();this.focus();" oncontextmenu="window.event.returnValue=false" ondragstart="window.event.returnValue=false" onselectstart="event.returnValue=false" topmargin=0 leftmargin=0 marginwidth=0 marginheight=0 style="background-color: #EFEFEF">
</DIV>

<Div id="playerobj" style="display:none">

<object id="Exobud" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject" width="0" height="0">
	<param name="autoStart" value="true">
	<param name="balance" value="0">
	<param name="currentPosition" value="0">
	<param name="currentMarker" value="0">
	<param name="enableContextMenu" value="false">
	<param name="enableErrorDialogs" value="false">
	<param name="enabled" value="true">
	<param name="fullScreen" value="false">
	<param name="invokeURLs" value="false">
	<param name="mute" value="false">
	<param name="playCount" value="1">
	<param name="rate" value="1">
	<param name="uiMode" value="none">
	<param name="volume" value="100">
</object></Div>

<DIV class=playerBg align=center>

<UL>

  <LI>

  <TABLE cellSpacing=0 cellPadding=0 width=595 border=0>

    <TBODY>

    <TR vAlign=top>

      <TD width=170 height=61>

        <TABLE cellSpacing=0 cellPadding=0 width=150 border=0>

          <TBODY>

          <TR align=right>

            <TD width=47><IMG height=25 

              src="images/btn_forward.gif" width=25 onClick="playPrev()" name="prevt" title="上一首曲目" style="cursor:hand"></TD>

            <TD vAlign=bottom width=41 height=36><IMG height=35 

              src="images/btn_play.gif" width=35 onClick="wmpPP()" name="playt" title="暂停" style="cursor:hand"></TD>

            <TD width=31><IMG height=25 

              src="images/btn_next.gif" width=25 onClick="playNext()" name="nextt" title="下一首曲目" style="cursor:hand"></TD>

            <TD width=31><IMG height=25 

              src="images/btn_stop.gif" width=25 onClick="wmpStop()" name="stopt" title="停止" style="cursor:hand"></TD></TR>

          <TR align=right>

            <TD colSpan=4 height=24>

              　</TD></TR></TBODY></TABLE></TD>

      <TD><TABLE cellSpacing=0 cellPadding=0 width=100% border=0>

        <TBODY>

          <TR>

            <TD class=font12-gray><font color="#000000"><span id="disp1">当前播放:</span> 

			</font> </TD>

          </TR>

          <TR>

            <TD class=efont10-purple onClick="chgTimeFmt()"><span id="disp2" title="时间长度显示方式 (正常/倒数)"> <strong>P<font color="#000000">LAYTIME / 00:00 | 00:00</font></strong></span></TD>

          </TR>

          <TR>

            <TD vAlign=center height=23><div id="CourseButtonBox" style="height:3;width:254;"><IMG id="CourseButton" style="width:0;" height=3 src="images/player_guage_pic.gif" onMouseDown="button_down()" onMouseMove="button_move()" onMouseUp="button_up()"></div></TD>

          </TR>

        </TBODY>

      </TABLE></TD>

      </TR></TBODY></TABLE>

  </LI></UL></DIV>

	  <div align="center">

	    <iframe src="exobudpl.php" width=620 height=300 scrolling="no" frameborder="0"></iframe>

	    </div>

</BODY></HTML>

