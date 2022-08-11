import { useSelector } from "react-redux";

export const Home = () => {
  const {userName} = useSelector(state => state.login);
  return (
    <>
      <div>This is home. {userName}</div>
    </>
  );
};
