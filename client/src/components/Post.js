import React from 'react'
import Image from '../Assets/images/images01.jpg';

export default function post() {
  return (
    <>
      <div className="post">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="content">
          <h2>lorem dhksd sdjcojsndocd ojc sdcjsdbcoisc hs dcjsdbocisc jsd csdbcosbio</h2>
          <p className="info">
            <a className="author">Ravindu</a>
            <time>2023-70-20 12.11.24</time>
          </p>
          <p className="summary">todayadkj jniosdnv sdjvbiosdhvsdv soddiosdosoidb</p>
        </div>
      </div>
    </>
  )
}
