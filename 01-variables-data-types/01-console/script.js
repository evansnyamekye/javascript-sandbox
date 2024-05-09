//log number 
console.log(100);

//log string 
console.log('Hello Kofi');

//log multiple values
console.log('Amount is', 980, 'which is', true );

//log a variable 
const x = 100;
console.log(x); 

//log error as table 
console.error('alert');
console.warn('warning'); 

// log object as table 
console.table({ name: 'evans', email: 'nyamekye2131@gmail.com'})
console.table({ fname: 'Evans', lname: 'Smith', email: 'acquah101@hotmail.com', phone: '233 42547856'})
//log group console commands 
console.group('simple');
console.log(x);
console.error('alert');
console.warn('warning');
console.groupEnd();


//add CSS to logs
const styles = 'padding: 10px; background: white; color: green';
console.log('%cHello world', styles); 
