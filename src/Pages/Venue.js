import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Venue = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>* Most popular Venues *</h1>
      <div style={{ overflowX: "scroll", display: "flex", gap: "13px" ,margin:"10px" , padding:"10px" }} className="scrollbehaviourd">
        <div>
          <Card style={{ width: "300px" }} className="Card_Orientation">
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=42"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 4.2km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card style={{ width: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=43"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 4.2km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card style={{ width: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=44"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 5.2km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card style={{ width: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=45"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 3.2km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card style={{ width: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=46"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 1.1km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card style={{ width: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://picsum.photos/800/600?random=47"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Demotrised
              </Typography>
              <Typography variant="h6">HSR Layout 11 , 6.6km</Typography>
              <span style={{display:"flex" , alignItems:"center"}}>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<StarIcon />} label="4.5" color="success" />
                </Stack>
                <FiberManualRecordIcon sx={{color:"red"}}/>
                <FiberManualRecordIcon sx={{color:"green"}}/>
               
                </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Venue;
