import React from 'react';
import axios from 'axios';
import './product.css'
import { useForm } from 'react-hook-form';
const Manageproduct = () => {
    const { register, handleSubmit, reset } = useForm()

  
    const onSubmit = (data) => {
      axios
        .post('https://obscure-harbor-64328.herokuapp.com/manageproduct', data)
        .then((res) => {
          if (res.data.insertedId) {
            alert('successfull Addition thank You')
            reset()
          }
        })
    }
    return (
        <div>
             <div className="productform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Name"
        />

        <textarea {...register('description')} placeholder="Description" />
        <input {...register('imageurl')} placeholder="Choose an image" />
        <input type="submit" />
      </form>
    </div>
        </div>
    );
};

export default Manageproduct;