import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import './dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState({});

  // ejecuta el fetch una sola vez al cargar el componente para traer los datos de la API
  useEffect(() => {
    // consumimos la api
    fetch('http://localhost:3001/dashboard')
      .then((res) => res.json())
      .then((resultado) => {
        setData(resultado);
      })
  }, []);
  const contComida = data.contComida ?? 0;
  const contServicio = data.contServicio ?? 0;
  const contVentas = data.contVentas ?? 0;
  // calculamos las inactivas
  const sucInactivas = (data.sucTotales ?? 0) - (data.sucActivas ?? 0);
  // estructuramos los datos para el formato de MUI
  // id, value y labek
  const chartData = [
    { id: 0, value: data.sucActivas ?? 0, label: 'Activas', color: '#4caf50' },     // verde activas
    { id: 1, value: sucInactivas, label: 'Inactivas', color: '#ef5350' },    // rojas las inactivas
  ];

  const contactoChart = [contComida, contServicio, contVentas];
  const contactoLabels = ['Comida', 'Servicio', 'Ventas'];

  return (
    <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* este es el encabezado*/}
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ fontWeight:'bold', mb:4, color:'#1e293b', fontSize:'1.8rem' }}
      >
        Gestiona las sucursales, promociones y ve las estadísticas
      </Typography>

      {/* Organiza los elementos de forma responsiva en 12 columnas */}
      <Grid container spacing={3} > {/* Define el espacio de separación (gap) entre las tarjetas */}
        <Grid item xs={12} md={6}>
          
          <Card  
            sx={{ 
              borderRadius: 4, 
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              p: 2 
            }}
          >
            <CardContent>
              {/* Título de la tarjeta */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#2196f3', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155', fontSize: '1.1rem' }}>
                  Estado de Sucursales
                </Typography>
              </Box>

              {/* grafica y chart */}
              <Box sx={{ width: '100%', height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: chartData,
                      innerRadius: 60, // Hace que sea una dona en vez de un circulo
                      outerRadius: 90,
                      paddingAngle: 3,
                      cornerRadius: 5,
                    },
                  ]}
                  slotProps={{
                    legend: {
                      direction: 'row',
                      position: { vertical: 'bottom', horizontal: 'center' },
                      labelStyle: { fontSize: 12, fill: '#64748b', fontWeight: 500 }
                    },
                  }}
                />
              </Box>

              {/* la parte de abajo de la grafica */}
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2, pt: 2, borderTop: '1px solid #f1f5f9' }}>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  Total: <strong>{data.sucTotales}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: '#4caf50' }}>
                  Activas: <strong>{data.sucActivas}</strong>
                </Typography>
              </Box>
            </CardContent>
          </Card>

        </Grid>

        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              p: 2
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff9800', mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#334155', fontSize: '1.1rem' }}>
                  Mensajes de contacto
                </Typography>
              </Box>

              <Box sx={{ width: '100%', height: 300 }}>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: contactoLabels }]}
                  series={[
                    {
                      data: contactoChart,
                      color: '#ff9800',
                    },
                  ]}
                  height={300}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2, pt: 2, borderTop: '1px solid #f1f5f9' }}>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  Comida: <strong>{contComida}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  Servicio: <strong>{contServicio}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  Ventas: <strong>{contVentas}</strong>
                </Typography>
              </Box>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;