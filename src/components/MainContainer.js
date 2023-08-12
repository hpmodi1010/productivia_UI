import SearchBar from "./SearchBar";
import NotificationIcon from "./NotificationIcon";
import Profile from "./Profile";
import classes from "./MainContainer.module.css";

const MainConttainer = () => {
  return (
    <div className={classes.MainConttainer}>
      <div className={classes.MainInput}>
        <SearchBar />
        <NotificationIcon />
        <Profile />
      </div>
      <div className={classes.mainOutput}>
        <h2>Home</h2>
      </div>
    </div>
  );
};
export default MainConttainer;
