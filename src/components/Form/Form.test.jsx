import { it, vi } from "vitest";
import Form from "./Form";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


//form bileşeninde diğer bileşenlerden faklı bir test yapacağız
// form gönderilince tabloya eklenıyor mu kontrol yapamayız. Çünkü tablo list bileşeninde
//form gönderilince state güncelleniyor mu kontrol yapamayız. (app bileşeninde old. için)

//* form görevini doğru bir şekilde yerine getiriliyor mu?
//addUser Fonksiyonun çalışıyor mu? addUser fonksiyonuna doğru parametere gönderiliyor mu
it('form gönderilince addUser doğru parametreleri alarak çalışıyor mu?',()=> {
    //mock  -> fonksiyonları taklit etme 
    // asıl fonksiyonu işlevini yapmaz sadece alttaki testleri yapmak için kullanır
    //ne zaman çağrıldı | kaç kere çağrıldı | hangi parameterlerle çağrıldı 
    // şeklinde testleri yapmamızı sağlayan orjinal fonksiyonu taklit eden yapıdır.
   // jest.fn()  --> create react app için

   const mock = vi.fn();

   const user = userEvent.setup()
    render(<Form addUser={mock}/>)

    const nameInp = screen.getByLabelText('İsim')
    const eMailInp = screen.getByLabelText('Email')
    const ageInp = screen.getByLabelText('Yaş')
})