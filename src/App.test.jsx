// bir şeyi return dedn bir fonk siyon olsun

import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";


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

//app bileşenini ekrana bas
//formu doldur ekleme yapınca formda yazdığımız bilgi ye göre tabloda yeni satır oluşuyor mu kontrol et

it('form doldurulup kayıt ediliyor mu?',async()=> {

  
    const user = userEvent.setup()
    render(<App/>)
  

    //form elemanlarını al
    const nameInp = screen.getByLabelText('İsim')
    const eMailInp = screen.getByLabelText('Email')
    const ageInp = screen.getByLabelText('Yaş')
    const button = screen.getByRole('button')

  

    //inputlara veri girişi yapıyoeruz
    await user.type(nameInp,'bilal');
    await user.type(eMailInp,'bilal@gmail.com');
    await user.type(ageInp,'22');

    //formu gönder
    await user.click(button);

    expect(screen.getByText('bilal')).toBeInTheDocument();
    expect(screen.getByText('bilal@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();



})