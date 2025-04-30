const SkeletonScreen = ({count = ""}) => {
  return (
      <div className="skeleton_screen">
      {Array.from({length:count}).map((_, index) =>( 
        <div className="skeleton_item" key={index}></div>
      ))}
      </div>
    );
}
 
export default SkeletonScreen;