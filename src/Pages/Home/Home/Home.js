import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../../News/News/News';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2 className='mb-3 lg-mb-3 '>All News: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
           
        </div>
    );
};

export default Home;