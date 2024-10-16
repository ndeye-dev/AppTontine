
import React from "react";
import { Doughnut } from "react-chartjs-2"; 
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
    datasets: [
        {
            label: "Couleurs préférées en France",
            data: [49, 9, 24, 18],
            backgroundColor: ['#083b4e', '#ffc0f7', 'Pink', '#10ef66'],
        },
    ],
    labels: ['Termine','En cours', 'Archive', 'Bloque'],
};
const options = {
    maintainAspectRatio: false,
};

class Rond extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="card shadow">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        );
    }
}
export default Rond;
