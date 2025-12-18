
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useGetChartData } from "../../../hooks/useMongodbCollections";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD"];

const AdminChart = () => {
  const [chartData, isLoading, isError] = useGetChartData()
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  const data = chartData.map((item) => {
    return {name: item.name, value: item.value}
  })
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
             
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" 
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminChart;
