import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
function CategorySideMenu() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadAllCategories().then(data => {
            console.log("loading categories ")
            console.log(data)
            setCategories([...data])
        })
            .catch(error => {
                console.log(error);
                toast.error("error in loading categories")
            })
    }, [])


    return (
        <div>
            <ListGroup>
                <ListGroupItem tag={Link} to="/" action={true} className='border-0'>
                    All Blogs
                </ListGroupItem>
                {categories && categories.map((cat, index) => {
                    return (
                        <ListGroupItem tag={Link} to={'/categories/' + cat.categoryId} className='border-0 shadow-0 mt-1' key={index} action={true}>
                            {cat.categoryTitle}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default CategorySideMenu