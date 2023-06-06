import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Xolodelnik",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "Macbook",
      amount: 1254.72,
    },
    {
      date: new Date(2021, 3, 1),
      description: "Jins",
      amount: 49.99,
    },
  ];

  return (
    <div>
      <h1>Start you</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
