// [1]
for ( let i = 1 ; i <= 3 ; i++ ) {
    console.log( i ) ;
}

// [2]
for ( let i = 1 ; i <= 2 ; i++ ) {
    console.log( i );
    for (let h = 1 ; h <= 3 ; h ++ ) {
        console.log( h );
    }
};

// 구구단

for ( let i = 2 ; i <= 9 ; i++ ) {
    for (let j = 1 ; j <= 9 ; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    };
}
