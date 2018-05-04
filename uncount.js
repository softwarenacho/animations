const uncount = (n) => {
  if ( n >= 0 ) {
    setTimeout( () => {
      console.log(`${n}!${n === 69 ? ' jejeje ' : '' }`);
      uncount(n - 1);
    }, 1000 );
  } else {
   console.log('Boom!!!');
  }
}

(function anonUncount(n) {
  if ( n >= 0 ) {
    setTimeout( () => {
      console.log( `${ n }!${ n === 69 ? ' jejeje ' : '' }` );
      anonUncount( n - 1 );
    }, 777 );
  } else {
   console.log('Boom!!!');
   return true;
  }
}(50));
