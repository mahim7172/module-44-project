
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Livechat = () => {
    const studentData = [
        { id: 1, name: "Alice", math: 85, english: 90, arabic: 78, urdu: 77 },
        { id: 2, name: "Bob", math: 89, english: 77, arabic: 76, urdu: 85 },
        { id: 3, name: "Charlie", math: 92, english: 88, arabic: 88, urdu: 90 },
        { id: 4, name: "David", math: 88, english: 91, arabic: 66, urdu: 66 },
        { id: 5, name: "Eve", math: 70, english: 80, arabic: 79, urdu: 82 },
        { id: 6, name: "Frank", math: 95, english: 77, arabic: 93, urdu: 94 },
        { id: 7, name: "Grace", math: 83, english: 87, arabic: 80, urdu: 75},
        { id: 8, name: "Hannah", math: 76, english: 94, arabic: 75, urdu: 92 },
        { id: 9, name: "Ivy", math: 91, english: 77, arabic: 89, urdu: 90 },
        { id: 10, name: "Jack", math: 79, english: 85, arabic: 82, urdu: 86 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={400} data={studentData}
            >
                 <Line dataKey="math" stroke='red'></Line>
                 <Line dataKey="english" stroke='yellow'></Line>
                 <Line dataKey="arabic" stroke='green'></Line>
                 <Line dataKey="urdu"></Line>
                 <XAxis></XAxis>
                 <YAxis></YAxis>
            </LineChart>
           
        </div>
    );
};

export default Livechat;