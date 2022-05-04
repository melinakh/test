import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCardMoisture() {
  const [product, setProduct] = useState({});
  let pageSize = 6;
  let number_of_pagination_pages = null;
  useEffect(() => {
    async function getData() {
      const response = axios
        .get("http://localhost:3000/Products")
        .then((res) => {
          let new_res = res.data.filter(function (item) {
            return item.Category === 11;
          });
          setProduct(new_res);
        });
    }
    getData();
  }, []);
  console.log(product);
  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
  number_of_pagination_pages = isFloat(product.length / pageSize)
    ? parseInt(product.length / pageSize + 1)
    : product.length / pageSize;
  console.log(number_of_pagination_pages);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Link to="/products/category/moisture/page/1">
        <h1>
          {" "}
          مرطوب کننده صورت
          <ArrowBackIosNewIcon />
        </h1>
      </Link>
      <div className="product-group">
        {product.length
          ? product.map((item) => {
              return (
                <Card className="main-card" sx={{ maxWidth: 345 }}>
                  <Link className="link" to={`${item.name}`}>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <div className="card">
                          {item.img.map((address) => (
                            <img className="product-img" src={address} />
                          ))}
                          <div className="product-description">
                            <h2 className="product-name" key={item.id}>
                              نام محصول: {item.name}
                            </h2>
                            <h2 key={item.id}>دسته بندی:{item.Category}</h2>
                            <h2 key={item.id}> قیمت:{item.Price}</h2>
                            <h2 key={item.id}>
                              تاریخ درج در سایت:{item.Join_Date}
                            </h2>
                          </div>
                        </div>
                      </Typography>
                    </CardContent>
                  </Link>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        توضیحات محصول:{item.Description}
                      </Typography>
                      <Typography paragraph></Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              );
            })
          : null}
        ;
      </div>
    </>
  );
}
