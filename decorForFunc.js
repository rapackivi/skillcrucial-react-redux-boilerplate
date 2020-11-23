// function spy(func){
// 	let calls = [];
// 	return function(a, b){
// 		calls.push([a,b]);
// 		return func(a, b);
// 	}
// }


// function work(a, b) {
//   console.log( a + b ); // ������������ ������� ��� �����
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// console.log(work.calls)

// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function slow(x) {
	// здесь могут быть ресурсоёмкие вычисления
	console.log(`Called with ${x}`);
	return x;
  }
  
  function cachingDecorator(func) {
	let cache = new Map();
  
	return function(x) {
	  if (cache.has(x)) {    // если кеш содержит такой x,
		return cache.get(x); // читаем из него результат
	  }
  
	  let result = func(x); // иначе, вызываем функцию
  
	  cache.set(x, result); // и кешируем (запоминаем) результат
	  return result;
	};
  }
  
  slow = cachingDecorator(slow);
  
  console.log( slow(1) ); // slow(1) кешируем
  console.log( "Again: " + slow(1) ); // возвращаем из кеша
  
  console.log( slow(2) ); // slow(2) кешируем
  console.log( "Again: " + slow(2) ); // возвращаем из кеша