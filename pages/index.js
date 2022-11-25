import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ productsData, bannerData }) => {
  console.log(productsData)
  return (
    <div className=''>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className='text-center my-6 text-blue-dark'>
        <h2 className='text-4xl font-extrabold'>Best Selling Products</h2>
        <p className='text-base font-extralight'>Heels of many variations</p>
      </div>
      <div className='flex mx-32 justify-center'>
        {productsData?.slice(0,4).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className='text-center my-6 text-blue-dark'>
        <h2 className='text-4xl font-extrabold'>New Arrivals</h2>
        <p className='text-base font-extralight'>From spain with love</p>
      </div>
      <div className='flex mx-32 justify-center'>
        {productsData?.slice(4,5).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner bannerData={bannerData.length && bannerData[1]}  />
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const productsQuery = '*[_type== "product"]'
  const productsData = await client.fetch(productsQuery)
  const bannerQuery = '*[_type== "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: { productsData, bannerData },
  }
}
