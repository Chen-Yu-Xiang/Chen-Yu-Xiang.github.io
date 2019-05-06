
he=function (){
	var firebase= require("./firebase");
	var db = firebase.firestore();


	
	
    var start = new Date('2017-01-01 21:12:19');
    var cityRef = db.collection('test').doc('test');
	var getDoc = cityRef.get()
    .then(doc => {
		console.log(doc.data()['date'].isEqual(start));
		console.log(doc.data()['date'].toDate());
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });

     //doc.data()[date]
	/*batch.set(citiesRef, { id: 1});
    batch.set(Product, { id: 1});
	batch.set(cart, { id: 1});
	batch.set(cart_detail, { id: 1});
	batch.set(oredr, { id: 1});
	batch.set(order_detail, { id: 1});
	batch.commit().then(function() {
	  console.log('Batch successfully committed!')
	}).catch(function() {
	  console.log('Batch failed.')
	})*/
}
he();
