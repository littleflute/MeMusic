<?php
require("global.php");
$subtitle='报告错误';

if (GetCookie('userlogin')=="1") $usernicheng=GetCookie('usernicheng'); else $usernicheng='';

if(empty($action)) {
  if (empty($errid) || !is_numeric($errid) || empty($errtitle)){ Showmsg("no","非法操作!","返回重新填写","javascript:history.back(-1)"); exit; }
  $errtitle=safeconvert($errtitle);
  require("header.php");
  include_once PrintEot('error');
  footer();
}
 elseif ($_POST['action']=="save"){
  $cknumon && GdConfirm($gdcode);
  if(empty($_POST['user'])) {
    Showmsg("no","你还没写名字呢!","返回重新填写","javascript:history.back(-1)"); exit;}
  else{
   $user=safeconvert($user);
   $songname=safeconvert($songname);
   $line="<?die;?>|$user|$songname|$id|$errmsg|$timestamp|\n";
   $e="$datadir/error.php";
   writetofile($e,$line,"ab");
   Showmsg("yes","提交成功,谢谢您的支持!","关闭本页","javascript:window.close()");  exit;
  }
}  
?>
