import React from 'react'


export default function Home() {
  return (
    <div>
      <div className='image1'>
        <img src='https://vaave.s3.amazonaws.com/assets/site_content/151657860/banners/851f5ac9941d720844d143ed9cfcf60a_1b7181cfa4f1e9ffe11413c4aa2f6d0d.jpeg'
          height='500px' width='1050px' />
        <h1 className='text'>Coimbatore Institute of Technology</h1>
      </div>
      {/* card */}

      <div class="card" style={{ width: "18rem" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/N._Chandrasekaran_CEO_Tata_Consultancy_Services.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Dr N Chandrashekar</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

    </div>
  )
}
