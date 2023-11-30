// bir şeyi return dedn bir fonk siyon olsun

import { afterEach, describe, expect } from "vitest";

const multiple = (a,b,c) => {
    return a*b*c;
}

// test yerine it kullanılabilir



//describe -> bir elemanın farklı durumlarının test ediyorsak o testleri bir arada tutmak için kullanabiliriz


describe("multible fonksiyonu için testler",()=> {

    afterEach(()=> { // her bir test tamamlandıktan sonra çalışır
        console.log("test tamamlamdı")
    })

    it("Pozitif sayılar gönderildiğinde sonuç", ()=> {
        expect(multiple(10,2,3)).toBe(60)
    })
    
    it("Negatif sayılar gönderildiğinde sonuç", ()=> {
        expect(multiple(-10,-2,-3)).toBe(-60)
    })
    it("Sıfır gönderildiğinde sonuç", ()=> {
        expect(multiple(10,2,0)).toBe(0)
    })

})
