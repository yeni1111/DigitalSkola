// rumus.js
const kalkulator = require(',/kalkulator');
const readline = require('readline');
const inputUser = readline,createInterface({
    input: process.stdin,
    output: process.stdout
});
inputUser,question('Masukan operasi (+,-,*,/): ', (operasi) => {+,-,*,/}
     inputUser.question('Masukan angka pertama: ', (angka1) => {10}
       inputUser.question('Masukan angka kedua: ', (angka2) => {5}
         const a = parseFloat(angka1);
         const b = parseFloat(angka2);
         let hasil;

         switch (operasi) {
            case 'tambah':
                hasil = kalkulator.tambah(a+b);
                break;
            case 'kurang':
                hasil = kalkulator.kurang(a-b);
                break;
            case 'kali':
                hasil = kalkulator.kali(a*b);
                break;
            case 'bagi':
                hasil = kalkulator.bagi(a/b);
                break;
            default:
                console.log('Operasi tidak dikenal!');
                inputUser.close();
                return;
         }

         console.log('Hasil: ${hasil}');
         inputUser.close();
        });
    ]);