import { expect } from "vitest"
import { users } from "../../constants/constants"
import List from "./List"
import {render,screen,within} from '@testing-library/react'

it("dizideki her bir eleman için bir satır eklenir",()=> {
    //1.)bileşene gelen propları tanımla ve bileşeni ekrana bas
    render(<List users={users}/>)
    //2.) tablonun body kısmındaki tüm verileri al  
    const body = screen.getByTestId('table-body')

    // body içerisindeki tüm rowları alır
    const rows = within(body).getAllByRole('row')  

    //3.) satırların sayısı kullanıcıların sayısına eşit mi kontrol eder
    expect(rows).toHaveLength(users.length)
})