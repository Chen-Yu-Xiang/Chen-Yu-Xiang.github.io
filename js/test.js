

/*function aaa(){
	var firebase= require("./firebase");
	var db = firebase.firestore();
	var citiesRef = db.collection('User22777722');
	var setSf = citiesRef.doc('User3').set({
  account: 'San Francisco',buyer_evaluation:'1', cart_id: '10', location: 'T',
  password:'123',phone:"000000000",seller_evaluation:"10",
  user_id: "11", user_name: "no"
});
   alert('你的姓名是000'); 
}*/

write_firbase=function() {
  var Username_element = document.getElementById('Username');
  var Username = Username_element.value;
  var Account_element = document.getElementById('Account');
  var Account = Account_element.value;
  var Password_element = document.getElementById('Password');
  var Password = Password_element.value;
  var ConfirmPassword_element = document.getElementById('ConfirmPassword');
  var ConfirmPassword = ConfirmPassword_element.value; 
  var Phone_element = document.getElementById('Phone');
  var Phone = Phone_element.value;
  var Email_element = document.getElementById('Email');
  var Email = Email_element.value;
  var Address_element = document.getElementById('Address');
  var Address = Address_element.value;
  var Birth_element = document.getElementById('Birth');
  var Birth = Birth_element.value;

 /* alert('你的姓名是'+Username+'\n電子郵件是'+Account
        +'\n你的姓名是'+Password+'\n電子郵件是'+ConfirmPassword
		+'\n你的姓名是'+Phone+'\n電子郵件是'+Email
		+'\n你的姓名是'+Address+'\n電子郵件是'+Birth		
  );  */
  var Birth=new Date(Birth);
  var data={
  account: Account,buyer_evaluation:'0', cart_id: '0', address: Address,
  password:Password,phone:Phone,seller_evaluation:"0",
  user_id: '0', user_name: Username,user_email:Email,user_birth:Birth
  };
  /*var data={
  account: 0,buyer_evaluation:'0', cart_id: '0', address: 0,
  password:0,phone:0,seller_evaluation:"0",
  user_id: '0', user_name: 0,user_email:0,user_birth:0
  };*/
  var firebase= require("./firebase");
  var query= require("./query");
  var db = firebase.firestore();
  var citiesRef = db.collection('User23');
  query(db,citiesRef,'User',data);
  
  
  
  
  //console.log('Document data:',id);

 // var setSf = citiesRef.doc('test'+id).set()
}
