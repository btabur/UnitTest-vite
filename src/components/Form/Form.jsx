import React from 'react'

const Form = ({addUser}) => {
  const handleSubmit = (e)=> {
    //inputlara girilen değerlerden obje oluştur
    e.preventDefault()
    const form = new FormData(e.target);
    const newUser = Object.fromEntries(form.entries())

    addUser(newUser)

  }
  return (
    <form onSubmit={handleSubmit} className='m-4'>
      <div>
        <label htmlFor="name">İsim</label>
        <input className='form-control' name='name' type="text" id='name' placeholder='Örn: Ahmet' required />
      </div>
      <div className='my-4'>
        <label htmlFor="email">Email</label>
        <input className='form-control' name='email' type="text" id='email' placeholder='Örn: deneme@gmail.com' required />
      </div>
      <div>
        <label htmlFor="age">Yaş</label>
        <input className='form-control' name='age' type='number' id='age' placeholder='Örn: 21' required />
      </div>
      <div className="d-flex justify-content-end my-3">
        <button className='btn btn-primary'>Ekle</button>

      </div>
    </form>
  )
}

export default Form