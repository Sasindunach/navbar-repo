
// import "./NavBar.css";
// import Box from "@mui/material/Box";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import Badge from "@material-ui/core/Badge";

// import React from "react";

// import Mobile from "../../assets/Mobile.svg";
// import Profile from "../../assets/Profile.svg";
// import drop from "../../assets/drop.png";


// function NavBar() {
//   const [itemCount, setItemCount] = React.useState(1);
//   return (
//     <div>
//       <div
//         id="nav"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-around",
//         }}
//       >
//         <div className="logo_">
//           <h1>LOGO</h1>
//         </div>

//         <div className="searchBar">
//           <div className="cont1">
//             <div>
//               <select className="DropDown">
//                 <option value="all">All</option>
//                 <option value="item1">Item 1</option>
//                 <option value="item2">Item 2</option>
//                 <option value="item3">Item 3</option>
//               </select>
//             </div>
//             <div className="boder1"></div>
//             <div>
//               <div class="spectrum-Textfield is-disabled">
//                 <input
//                   className="TextFiled"
//                   type="text"
//                   placeholder="Search something..."
//                 />
//               </div>
//             </div>
//             <div className="boder2"></div>
//             <div>
//               <button className="btn search">Search</button>
//             </div>
//           </div>
//         </div>

//         <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//           <div className="NavItem">
//             <img src={Mobile} height={25} />
//             <div className=" NavItemName">
//               <a href="#">
//                 Download <br />
//                 Mobile app
//               </a>
//             </div>
//           </div>
//           <div className="NavItem">
//             <img src={Profile} height={25} />
//             <div className=" NavItemName">
//               <a href="#">
//                 Sign In
//                 <img className="SignInDropdownIcon" src={drop} height={15} />
//               </a>
//             </div>
//           </div>
//           <div className="NavItem">
//             <Badge color="secondary" badgeContent={itemCount}>
//               <ShoppingCartOutlinedIcon style={{ fontSize: "32x" }} />{" "}
//             </Badge>
//             <div className=" NavItemName">
//               <a href="#">Cart</a>
//             </div>
//           </div>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
