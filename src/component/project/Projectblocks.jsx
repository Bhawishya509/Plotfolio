import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "react-bootstrap/Card";
import "./ProjectBlocks.css";
function Projectblocks(props) {
   
  if (props.val === 1) {
    return (
      <>
        <a href={props.link}>
          <Card style={{ width: "25rem" }} className="pad">
            <Card.Img
              variant="top"
              src={props.img}
                
            />
          </Card>
          
        </a>
      </>
    );
  } else {
    return (
      <>
        <Skeleton className="skel"></Skeleton>
      </>
    );
  }
}

export default Projectblocks;
