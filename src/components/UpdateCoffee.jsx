import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id,name,chef,supplier,taste,category,details,photo} = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details  = form.details.value
        const photo = form.photo.value
        const updatedCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(updatedCoffee)
        // send data to server 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='container mx-auto'>
            <h3 className="text-2xl font-bold">Add a coffee</h3>
            <form onSubmit={handleUpdateCoffee}>
                <div className='flex  gap-3'>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="coffee name" name='name' defaultValue={name} class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Chef" name='chef' defaultValue={chef} class="input input-bordered" required />
                        <label class="label">
                        </label>
                    </div>
                </div>
                <div className='flex  gap-3'>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier" name='supplier' defaultValue={supplier} class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Taste" name='taste' defaultValue={taste} class="input input-bordered" required />
                        <label class="label">
                        </label>
                    </div>
                </div>
                <div className='flex  gap-3'>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name='category' defaultValue={category} class="input input-bordered" required  />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' defaultValue={details} class="input input-bordered" required />
                        <label class="label">
                        </label>
                    </div>
                </div>
                <div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">photo</span>
                        </label>
                        <input type="text" placeholder="photo" name='photo' defaultValue={photo} class="input input-bordered" required />
                        <label class="label">
                        </label>
                    </div>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Add coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;