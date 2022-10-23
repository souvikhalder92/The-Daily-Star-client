import { ErrorResponse } from '@remix-run/router';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category/Category';

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() =>{

         fetch('https://the-daily-star-server.vercel.app/news-categories')
         .then(res => res.json())
         .then(data => setCategories(data));

    },[])
    return (
        <div>
            <h3 className='text-muted'>All Category: {categories.length}</h3>
             <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-secondary fw-semibold">
                        {category.name}
                    </Link></p>
                    )
                }
                
             </div>
            
        </div>
    );
};

export default LeftSideNav;