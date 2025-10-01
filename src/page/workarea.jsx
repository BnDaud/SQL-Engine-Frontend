import Editor from "../component/commandarea";
import Resultarea from "../component/resultarea";

const WorkArea = () => {
  return (
    <div className={`mt-3 mx-3 rounded-lg`}>
      <Editor />
      <Resultarea />
    </div>
  );
};

export default WorkArea;
