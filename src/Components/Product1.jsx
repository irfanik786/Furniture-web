import React, { useState } from "react";
import "./product1.css";

const Product1 = () => {

  const [selectedItem, setSelectedItem] = useState('item-1'); 

    const handleClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="popular-products">
        <h1>POPULAR PRODUCTS</h1>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra
        </p>
        <p>ornare, eros dolor interdum nulla.</p>
      </div>
      <div className="furnitures">
        <a onClick={() => handleClick('item-1')}>Sofa</a>
        <a onClick={() => handleClick('item-2')}>Table</a>
        <a onClick={() => handleClick('item-3')}>Chair</a>
        <a onClick={() => handleClick('item-4')}>Bed</a>
        <a>Lightning</a>
        <a>Decore</a>
      </div>
      {selectedItem === 'item-1' && (
      <div className="items">
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png.webp"
            alt="item-1"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png.webp"
            alt="item-2"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png.webp"
            alt="item-3"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
      </div>
    )}
    {selectedItem === 'item-2' && (
      <div className="items">
        <div className="item-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoDRumeLJOTO6m9Ma_for29B_cykPkz2GGw&s"
            alt="item-1"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$248</p>
        </div>
        <div className="item-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRMLRxpBEc5hFD_Gtj-uxCL7AyziBTIszwQ&s"
            alt="item-2"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$248</p>
        </div>
        <div className="item-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-fNrsvGiNiOU1zDbgMnFViBKDqOXvIzakQ&s"
            alt="item-3"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$248</p>
        </div>
      </div>
    )}
    {selectedItem === 'item-3' && (
      <div className="items">
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png"
            alt="item-1"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$368</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png"
            alt="item-2"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$368</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png"
            alt="item-3"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$368</p>
        </div>
      </div>
    )}
    {selectedItem === 'item-4' && (
      <div className="items">
        <div className="item-1">
          <img
            src="https://media.istockphoto.com/id/1453505460/photo/3d-illustration-of-a-comfortable-bed-on-a-white-background.jpg?s=612x612&w=0&k=20&c=C6mngXBtz87q2T8BHu66aP3P2OBSJDd6uAPAFkdw5GE="
            alt="item-1"
            width={250}
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$749</p>
        </div>
        <div className="item-1">
          <img
            src="https://thumbs.dreamstime.com/b/black-leather-bed-isolated-white-background-luxury-33724413.jpg"
            alt="item-2"
            width={340}
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$749</p>
        </div>
        <div className="item-1">
          <img
            src="https://media.istockphoto.com/id/91714601/photo/brown-wooden-bed-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4Ix41jsxEeESeKZ941326xPvwexmrmBznSZXFvgjkYU="
            alt="item-3"
            width={375}
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$749</p>
        </div>
      </div>
    )}
      <div className="items-2">
        <div className="item-2"></div>
        <div className="item-3">
          <h2>
            BEST FURNITURE
            <br /> MANUFACTURER
          </h2>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis <br />
            viverra ornare, eros dolor interdum nulla.
          </p>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis <br />
            viverra ornare, eros dolor interdum nulla.
          </p>
          <a>DISCOVER MORE</a>
        </div>
      </div>
    </>
  );
};

export default Product1;


// import React, { useState } from "react";
// import "./product1.css";

// const Product1 = () => {
//   // Define the state for the selected item category
//   const [selectedItem, setSelectedItem] = useState('item-1'); 

//   // Function to handle click events and set the selected item category
//   const handleClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <>
//       <div className="popular-products">
//         <h1>POPULAR PRODUCTS</h1>
//         <p>
//           Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
//         </p>
//         <p>ornare, eros dolor interdum nulla.</p>
//       </div>
//       <div className="furnitures">
//         <a onClick={() => handleClick('item-1')}>Sofa</a>
//         <a onClick={() => handleClick('item-2')}>Table</a>
//         <a onClick={() => handleClick('item-3')}>Chair</a>
//         <a onClick={() => handleClick('item-4')}>Bed</a>
//         <a onClick={() => handleClick('item-5')}>Lightning</a>
//         <a onClick={() => handleClick('item-6')}>Decore</a>
//       </div>
//       <div className="items">
//         {selectedItem === 'item-1' && (
//           <>
//             <div className="item-1">
//               <img
//                 src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png.webp"
//                 alt="item-1"
//               />
//               <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
//               <p>$367</p>
//             </div>
//             <div className="item-1">
//               <img
//                 src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png.webp"
//                 alt="item-2"
//               />
//               <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
//               <p>$367</p>
//             </div>
//             <div className="item-1">
//               <img
//                 src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png.webp"
//                 alt="item-3"
//               />
//               <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
//               <p>$367</p>
//             </div>
//           </>
//         )}
//         {selectedItem === 'item-2' && (
//           <>
//             <div className="item-2">
//               <img
//                 src="https://example.com/path/to/your/image2-1.png"
//                 alt="item-2-1"
//               />
//               <a>Another Item Description 1</a>
//               <p>$400</p>
//             </div>
//             <div className="item-2">
//               <img
//                 src="https://example.com/path/to/your/image2-2.png"
//                 alt="item-2-2"
//               />
//               <a>Another Item Description 2</a>
//               <p>$400</p>
//             </div>
//             <div className="item-2">
//               <img
//                 src="https://example.com/path/to/your/image2-3.png"
//                 alt="item-2-3"
//               />
//               <a>Another Item Description 3</a>
//               <p>$400</p>
//             </div>
//           </>
//         )}
//         {selectedItem === 'item-3' && (
//           <>
//             <div className="item-3">
//               <img
//                 src="https://example.com/path/to/your/image3-1.png"
//                 alt="item-3-1"
//               />
//               <a>Different Item Description 1</a>
//               <p>$500</p>
//             </div>
//             <div className="item-3">
//               <img
//                 src="https://example.com/path/to/your/image3-2.png"
//                 alt="item-3-2"
//               />
//               <a>Different Item Description 2</a>
//               <p>$500</p>
//             </div>
//             <div className="item-3">
//               <img
//                 src="https://example.com/path/to/your/image3-3.png"
//                 alt="item-3-3"
//               />
//               <a>Different Item Description 3</a>
//               <p>$500</p>
//             </div>
//           </>
//         )}
//         {/* Add additional conditions for other item types here */}
//       </div>
//       <div className="items-2">
//         <div className="item-2"></div>
//         <div className="item-3">
//           <h2>
//             BEST FURNITURE
//             <br /> MANUFACTURER
//           </h2>
//           <p>
//             Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis <br />
//             viverra ornare, eros dolor interdum nulla.
//           </p>
//           <p>
//             Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis <br />
//             viverra ornare, eros dolor interdum nulla.
//           </p>
//           <a>DISCOVER MORE</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product1;
