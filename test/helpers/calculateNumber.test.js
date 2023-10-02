import { calculateNumber } from "../../src/helpers/calculateNumber";

describe('Pruebas en calculateNumber', () => {
    test('debe de devolver los resultados correctos con los números del 1 - 10', () => {
        const resultados = [0, -14, -16, -24, -27, -41, -36, -40, -23, -11];

        for( let i = 0; i < 10; i++ ){
            const serieResult = calculateNumber( i + 1 );

            expect( serieResult ).toBe( resultados[i] );
        }
    });
});