import React from 'react';
import './HomeItem.css';

const HomeItem = () => {
  return (
    <div className="Posts" >
      <h2>Recent Blog Posts</h2>
      <ul>
        <li>
          <h3>Long Haird Vs Short Haired Gerbils - the Timeless Debate Settled! <span className="blog-date">January 29th, 2018</span></h3>
          <article className="Excerpt">Few topics in history have been as hostly debated, as divisive and as contentious as this one. The debate between long haired and short haired gerbils has spawned more Internet flame than any other discussion of its kind. Yet the final winner has yet to be determined. Until now.</article>
          <a href="/blog" className="Read-more-article">Read More</a>
        </li>
        <li>
          <h3>The Proper Way to Shampoo a Ferret <span className="Blog-date">January 20th, 2018</span></h3>
          <article className="Excerpt">The act of shampooing your ferret may seem simple to newcomers. Just toss him into a bucket of soapy water and splash vigorously, right? Actually, no. There's a much more effective and safe way to clean up a dirty ferret. Today I'm going to shed some light on this often misunderstood and deceptively complex ritual.</article>
          <a href="/blog" className="Read-more-article">Read More</a>
        </li>
      </ul>
    </div>
  );
};

export default HomeItem;