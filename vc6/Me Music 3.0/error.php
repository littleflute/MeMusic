<?php
require("global.php");
$subtitle='�������';

if (GetCookie('userlogin')=="1") $usernicheng=GetCookie('usernicheng'); else $usernicheng='';

if(empty($action)) {
  if (empty($errid) || !is_numeric($errid) || empty($errtitle)){ Showmsg("no","�Ƿ�����!","����������д","javascript:history.back(-1)"); exit; }
  $errtitle=safeconvert($errtitle);
  require("header.php");
  include_once PrintEot('error');
  footer();
}
 elseif ($_POST['action']=="save"){
  $cknumon && GdConfirm($gdcode);
  if(empty($_POST['user'])) {
    Showmsg("no","�㻹ûд������!","����������д","javascript:history.back(-1)"); exit;}
  else{
   $user=safeconvert($user);
   $songname=safeconvert($songname);
   $line="<?die;?>|$user|$songname|$id|$errmsg|$timestamp|\n";
   $e="$datadir/error.php";
   writetofile($e,$line,"ab");
   Showmsg("yes","�ύ�ɹ�,лл����֧��!","�رձ�ҳ","javascript:window.close()");  exit;
  }
}  
?>
