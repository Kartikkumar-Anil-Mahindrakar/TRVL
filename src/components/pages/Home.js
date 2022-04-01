import React from 'react';
import '../../App.css';
import Cards from '../Cards';
// import Footer from '../Footer';
import HeroSection from '../HeroSection';
// const MyContext = React.createContext('btn btn-primary');

function Home() {
  return (
    <>
    {/* <h1>HEllo</h1> */}
      <HeroSection />
      <Cards/>
      {/*
      Example of Context API
      <MyContext.Provider value='btn btn-secondary' >
        <Footer/>
      </MyContext.Provider> */}
    </>
  );
}

export default Home;

// Example of Context API
// function Footer() {
//   return (
//     <div>
//       <FooterItem />
//     </div>
//   )
// }

// function FooterItem() {
//   return (
//     <div>
//       <MyContext.Consumer>
//         {value =>(
//           <>
//           <p>{console.log(value)}</p>
//           <button type='button' className={value}>Primary Butotn</button>
//           </>
//         )}
//       </MyContext.Consumer>
//     </div>
//   )
// }

