login=function(){
	 var Account_element = document.getElementById('Account');
	 var Account= Account_element.value;
	 var Password_element = document.getElementById('Password');
	 var Password = Password_element.value;
	 
	 if(Password.length==0 || Account.length==0){
		  alert("帳密尚未完整");
		 // console.log('Document data1111:');
		  return ;
	 }
	  var firebase= require("./firebase");
	  var db = firebase.firestore();
	  var citiesRef = db.collection('User23');
  
	 var allCities = citiesRef.where('account', '==',Account ).where('account', '==',Password ).get()
	 .then(snapshot => {
		if (snapshot.empty) {
			console.log('No matching documents.');
			alert("帳密錯誤");
			location.href = "./index.html";
		} 
		else{
			snapshot.forEach(doc => {
				console.log(doc.id, '=>', doc.data());
				setCookie('id',doc.data()['user_id'],30);
				
			});
			
			//location.href = "./index.html";
		}
	})
	.catch(err => {
		console.log('Error getting documents', err);
	});
    alert(getCookie('id'));
 
 
 }
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	//alert(cname+"="+cvalue+"; "+expires);
	document.cookie = cname+"="+cvalue+"; "+expires;
	alert(document.cookie);
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
function checkCookie(){
	var user=getCookie("username");
	alert(user!="");
	if (user!=""){
		alert("欢迎 " + user + " 再次访问");
	}
	else {
		user = prompt("请输入你的名字:","");
  		if (user!="" && user!=null){
    		setCookie("username",user,30);
    	}
	}
}
