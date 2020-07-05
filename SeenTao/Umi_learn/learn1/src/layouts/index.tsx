export default (props) => {
  console.log('route',props.route);
  return <div style={{ padding: 30 }}>{ props.children }-layout</div>;
}