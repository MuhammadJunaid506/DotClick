// import React, { useState } from 'react';
// import './AdminPortal.css';

// const AdminPortal = ({ onAddProduct, onDeleteProduct, onEditProduct, products }) => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [qty, setQty] = useState('');
//   const [variety,setVariety] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && price && qty && variety) {
//       onAddProduct({ name, price , qty, variety});
//       setName('');
//       setPrice('');
//       setQty('')
//       setVariety('');
//     }
//   };

//   const handleDelete = (productId) => {
//     onDeleteProduct(productId);
//   };

//   const handleEdit = (product) => {
//     const updatedName = prompt('Enter the new name:', product.name);
//     const updatedPrice = prompt('Enter the new price:', product.price);

//     if (updatedName && updatedPrice) {
//       const updatedProduct = {
//         name: updatedName,
//         price: parseFloat(updatedPrice),
//       };
//       onEditProduct(product.id, updatedProduct);
//     }
//   };

//   return (
//     <div className='admin-dashboard'>
//       <h2>Admin Portal</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Product name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//           <input
//           type="number"
//           placeholder="Qty"
//           value={qty}
//           onChange={(e) => setQty(e.target.value)}
//         />
//           <input
//           type="text"
//           placeholder="Variety"
//           value={variety}
//           onChange={(e) => setVariety(e.target.value)}
//         />
//         <button type="submit">Add Product</button>
//       </form>

//       <h2>Products</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Qty</th>
//             <th>Price</th>
//             <th>Varity</th>
//             <th>Edit Items</th>
//             <th>Delete Items</th>
//           </tr>
//         </thead>
//         {products && products.length > 0 ? (
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td>{product.qty}</td>
//                 <td>{product.variety}</td>
//                 <td>
//                   <button type="button" onClick={() => handleEdit(product)}>
//                     Edit Product
//                   </button>
//                 </td>
//                 <td>
//                   <button type="button" onClick={() => handleDelete(product.id)}>
//                     Delete Product
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         ) : (
//           <tbody>
//             <tr>
//               <td colSpan="4">No products found.</td>
//             </tr>
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

// export default AdminPortal;



import React, { useState } from 'react';
import './AdminPortal.css';

const AdminPortal = ({ onAddProduct, onDeleteProduct, onEditProduct, products }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [variety, setVariety] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && qty && variety) {
      onAddProduct({ name, price, qty, variety });
      setName('');
      setPrice('');
      setQty('');
      setVariety('');
    }
  };

  const handleDelete = (productId) => {
    onDeleteProduct(productId);
  };

  const handleEdit = (product) => {
    setPopupProduct(product);
    setShowPopup(true);
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    if (popupProduct) {
      const updatedProduct = {
        id: popupProduct.id,
        name,
        price,
        qty,
        variety,
      };
      onEditProduct(popupProduct.id, updatedProduct);
      setShowPopup(false);
      setPopupProduct(null);
    }
  };

  return (
    <div className='admin-dashboard'>
      <h2>Admin Portal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          type="text"
          placeholder="Variety"
          value={variety}
          onChange={(e) => setVariety(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Products</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Variety</th>
            <th>Edit Items</th>
            <th>Delete Items</th>
          </tr>
        </thead>
        {products && products.length > 0 ? (
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>{product.price}</td>
                <td>{product.variety}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(product)}>
                    Edit Product
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(product.id)}>
                    Delete Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7">No products found.</td>
            </tr>
          </tbody>
        )}
      </table>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <form onSubmit={handlePopupSubmit}>
            <label>
              New Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              New Price:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              New Qty:
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </label>
            <label>
              New Variety:
              <input
                type="text"
                value={variety}
                onChange={(e) => setVariety(e.target.value)}
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default AdminPortal;
