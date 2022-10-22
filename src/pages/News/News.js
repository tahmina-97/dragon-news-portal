import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <NewsDetails
                key={news._id}
                news={news}
            ></NewsDetails>

        </div>
    );
};

export default News;