// import React, { useEffect } from "react";
// // import React, { useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// import EditNoteIcon from "@mui/icons-material/EditNote";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Link } from "react-router-dom";

// const Order = ({ readOrderProduct, order }) => {
//   useEffect(() => {
//     readOrderProduct();
//   }, []);
// // console.log(order/);
//   return (
//     <div>
//       {order.map((el, index) => (
//         <Card
//           sx={{
//             width: "265px",
//             height: "300px",
//             padding: "10px",
//           }}
//         >
//           <CardMedia
//             sx={{ height: "150px", borderRadius: "5px" }}
//             image={el.image}
//             title="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {el.name}
//             </Typography>
//             <Typography gutterBottom variant="h5" component="div">
//               {el.price}
//             </Typography>
//           </CardContent>
//           <CardActions
//             sx={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//             }}
//           >
//             <button>
//               <BookmarkBorderIcon />
//             </button>
//             <Link to={`/edit/${el.id}`}>
//               <button>
//                 <EditNoteIcon />
//               </button>
//             </Link>
//             <button>
//               <DeleteIcon />
//             </button>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Order;
