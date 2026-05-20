import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CircularProgress, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import './dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ejecuta el fetch una sola vez al cargar el componente para traer los datos de la API
  useEffect(() => {
    // consumimos la api
    fetch('http://localhost:3001/dashboard')
      .then((res) => res.json())
      .then((resultado) => {
        setData(resultado);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al traer los datos del dashboard:", error);
        setLoading(false);
      });
  }, []);

  // mientras la API responde, mostramos una pantalla de carga limpia sin nada
  if (loading) {
    return (
      <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', height:'80vh' }}>
        <CircularProgress size={50} />
      </Box>
    );
  }

  // si no trae nada la api ponemos el 
  if (!data) {
    return (
      <div className="error">
        <p>Error al consultar la API</p>
      </div>
    );
  }

  // calculamos las inactivas
  const sucInactivas = data.sucTotales - data.sucActivas;
  // estructuramos los datos para el formato de MUI
  // id, value y labek
  const chartData = [
    { id: 0, value: data.sucActivas, label: 'Activas', color: '#4caf50' },     // verde activas
    { id: 1, value: sucInactivas, label: 'Inactivas', color: '#ef5350' },    // rojas las inactivas
  ];

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
        <Grid item xs={12} sm={6} md={4}>
          
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
      </Grid>
    </Box>
  );
};

export default Dashboard;