import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destruir o gráfico anterior se existir
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Dados para o gráfico
    const data = {
      labels: ['Amazon', 'Netflix', 'Spotify', 'Uber', 'Steam', 'PagSeguro'],
      datasets: [
        {
          label: 'Quantidade de Gift Cards',
          data: [4, 3, 2, 2, 1, 1],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };

    // Configuração do gráfico
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: false,
            text: 'Distribuição de Gift Cards por Fornecedor'
          }
        }
      }
    };

    // Criar o gráfico
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, config);

    // Cleanup ao desmontar o componente
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <canvas ref={chartRef} />
  );
};

export default ChartComponent;
