import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const MyGraphic =(dataTemperature,keys)=>{
    return (
   /*  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={dataTemperature}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={keys} />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey={keys} stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer> */
  <div className='border rounded mx-0'>
    graphic
  </div>
);
  
}; export default MyGraphic;