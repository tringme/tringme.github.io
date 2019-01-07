<?

function GetRequestField($field, $defaultval="") {
	$val = $defaultval;

	if(isset($_REQUEST[$field])) {
		$val = trim($_REQUEST[$field]);
	}

	return $val;
}

function fetch_curl($url, &$respcode) {
	$respcode = 200;
	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);  
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 10);
	curl_setopt($ch,CURLOPT_TIMEOUT, 20);
	$response = curl_exec($ch);
	if (!$response) {
		$info = curl_getinfo($ch);
		$respcode = $info['http_code'];
	}
	curl_close ($ch);
	return $response;
}

$email = GetRequestField('email', '');
$code = GetRequestField('code', '');
$rv = '';
if($email != '' && $code != '') {
	$url = "https://api.tringme.com/webapi2/webapi.php?op=resetpassword&email=".urlencode($email)."&code=$code";
	$data = json_decode(fetch_curl($url, $respcode), true);
	$rv = $data['result'];
}

if($rv == 'OK') 
 print "your new password has been emailed to you.";
else
 print "Unable to change your password, start again!";
