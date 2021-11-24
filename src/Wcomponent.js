import "./styles.css";

const Wcomponent = (props) => {
  const classes = "wrapper " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Wcomponent;
