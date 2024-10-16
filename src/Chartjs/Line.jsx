
import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

class Ligne extends React.Component {
    render(){
      const yValues = [0, 40,30, 34, 50,32,60, 60, 80];
      
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','juin','juillet'],

            datasets: [
              {
                label: 'Evolution des cotisation en fonction du  temps',
                data: [0, 20, 40, 60, 80],
                fill: false,
                backgroundColor: "#224957",
                borderColor: " #20df7f ", 
                tension: 0,
                data: yValues

              },
            ],
          };
          const options = {
            responsive: true,
            plugins: {
            },
          };
        return(
            <div className='container'>
                <div className='row'>
                <div className="card shadow ">
                    <div className='card-header fw-semibold color '>
                    Evaluation des cotisations en fonction du temps
                    </div>
                <div className="card-body ">
                <Line data={data} options={options} />
                </div>
                </div>
                </div>

            </div>
        )
    }
}
export default Ligne