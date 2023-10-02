class Serie{
    calculateNumber( n ){
        return 2*( this.fibonacci( n - 2 )) + 3*( this.triangular( n - 2 )) - 7*( this.primo( n - 1 ))
    }

    fibonacci( x ){
        if( x <= 0 ) return 0;

        let numbers = [0,1];
        
        for( let i = 1; i < x; i++ ){
            let y = numbers[i - 1] + numbers[i];
            numbers.push( y );
        }

        return numbers[x];
    }

    triangular( x ){
        if( x <= 0 ) return 0;

        const number = (x*( x + 1))/2;

        return number;
    }

    primo( x ){
        if( x <= 0 ) return 0;

        let j = 0; //Contador de Primos
        let z = 2; //Número iterador
        let primo;

        while( true ){
            primo = true;

            for( let i = 2; i < z; i ++ ){
                if( z % i === 0 ){
                    primo = false;
                    break;
                }
            }

            if( primo ){
                j++;
            }

            if( j == x ) return z;

            z++;
        }
    }
}

export default Serie