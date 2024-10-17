
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

class Rond extends React.Component {
    render() {

        const data = {
            datasets: [
                {
                    label: 'Statistique',
                    data: [49, 9, 24, 18],
                    backgroundColor: ['#083b4e', '#ffc0f7', 'Pink', '#10ef66'],
                    borderWidth: 2
                },
            ],
            labels: ['Termine', 'En cours', 'Archive', 'Bloque'],
        };
        const options = {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            },
        };

        return (
            <div className='container'>
                <div className='row'>
                    <div className="card shadow">
                        <div className='card-header fw-semibold color '>
                            Statistique
                        </div>
                        <div className="card-body ">
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Rond;
