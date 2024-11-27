import React from 'react';
import { data, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee,coffees, setCoffees}) => {
    const {_id,name,chef,supplier,taste,category,details,photo} = coffee;

    const handleDelete = id =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                      Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(coffee => coffee._id !== id)
              setCoffees(remaining)
                }
            })
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <div>
                    <p>{name}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn">Details</button>
                    <Link to={`/updateCoffee/${_id}`}  className="btn">Edit</Link>
                    <button onClick={()=>handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;