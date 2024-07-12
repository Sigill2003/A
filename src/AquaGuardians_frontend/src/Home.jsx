import React, { useEffect, useState } from 'react';

export default function Home() {
    const [sensorData, setSensorData] = useState(null);

    // Función para obtener datos aleatorios de sensores
    const getRandomSensorData = () => {
        const time_range = Array.from({ length: 12 }, (_, index) => index * 5); // Genera intervalos de tiempo de 5 minutos
        const ph_values = Array.from({ length: 12 }, () => parseFloat((Math.random() * (8.5 - 6.5) + 6.5).toFixed(2)));
        const turbidity_values = Array.from({ length: 12 }, () => parseFloat((Math.random()).toFixed(2)));
        const tds_values = Array.from({ length: 12 }, () => parseFloat((Math.random() * 500).toFixed(2)));

        const sensorData = time_range.map((time, index) => ({
            Timestamp: `2024-07-11 ${String(time).padStart(2, '0')}:00`,
            pH: ph_values[index],
            Turbidity: turbidity_values[index],
            TDS: tds_values[index]
        }));

        setSensorData(sensorData);
        // renderChart(sensorData);
    };

    useEffect(() => {
        getRandomSensorData();
    }, []);

    return (
        <html lang="es">
            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>AquaGuardian - Sensores de Calidad del Agua</title>
            </head>
            <body>
                <header className="header d-flex justify-content-between align-items-center">
                    <h1 className="ml-3">AquaGuardian</h1>
                    <img src="\\wsl.localhost\Ubuntu\home\sigi\AquaGuardians\imagen.jpg" alt="Logo AquaGuardian" className="mr-3" style={{ height: '50px' }} />
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h3>Información de Sensores</h3>
                                </div>
                                <div className="card-body">
                                    {sensorData && (
                                        <>
                                            <p><strong>Sensor de PH:</strong> {sensorData[0].pH}</p>
                                            <p><strong>Sensor de Turbidez:</strong> {sensorData[0].Turbidity}</p>
                                            <p><strong>Sensor de Conductividad:</strong> {sensorData[0].TDS}</p>
                                            <p>Estos sensores permiten monitorear la calidad del agua en tiempo real, asegurando que el agua reciclada cumpla con los estándares de calidad requeridos.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h3>Gráfica de Calidad del Agua</h3>
                                </div>
                                <div className="card-body">
                                    <canvas id="waterQualityChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Información Detallada de Sensores</h3>
                                </div>
                                <div className="card-body">
                                    <p><strong>Sensor de PH:</strong></p>
                                    <ul>
                                        <li>pH {'<'} 4: El agua es extremadamente ácida. Esto puede resultar en un sabor muy ácido y corrosivo.</li>
                                        <li>pH 4 - 6: El agua es ácida. Puede causar corrosión en las tuberías y afectar el sabor.</li>
                                        <li>pH 6.5 - 8.5: El rango ideal para el agua potable. Es considerado seguro y agradable para el consumo humano.</li>
                                        <li>pH 8.5 - 11: El agua es alcalina. Puede tener un sabor amargo y causar depósitos de minerales en las tuberías.</li>
                                        <li>pH > 11: El agua es extremadamente alcalina. Esto puede ser peligroso para la salud humana y la vida acuática.</li>
                                    </ul>
                                    <p><strong>Sensor de Turbidez:</strong> La turbidez mide la claridad del agua. Un agua con alta turbidez puede contener partículas en suspensión que pueden afectar la calidad del agua y su idoneidad para ciertos usos.</p>
                                    <ul>
                                        <li>0 - 1 NTU: Agua muy clara y generalmente considerada segura para el consumo humano. Este es el rango ideal para agua potable.</li>
                                        <li>1 - 5 NTU: Agua clara, pero puede comenzar a tener ligeras trazas de turbidez. Todavía es aceptable para el consumo, pero puede requerir monitoreo.</li>
                                        <li>5 - 10 NTU: Agua con notable turbidez. Puede ser aceptable en algunos contextos, pero la calidad del agua debe ser evaluada antes del consumo.</li>
                                        <li>10 - 50 NTU: Agua visiblemente turbia. No es recomendable para el consumo sin tratamiento adicional.</li>
                                        <li> 50 NTU: Agua muy turbia y no apta para el consumo humano. Puede requerir un tratamiento significativo para ser considerada segura.</li>
                                    </ul>
                                    <p><strong>Sensor de Conductividad (TDS):</strong> La conductividad mide la capacidad del agua para conducir electricidad, lo que está relacionado con la cantidad de iones disueltos en el agua. Es un indicador importante de la salinidad del agua.</p>
                                    <ul>
                                        <li>0 - 50 mg/L: Agua de muy baja mineralización, generalmente desmineralizada o agua de ósmosis inversa. Puede ser adecuada para aplicaciones específicas, pero no necesariamente para consumo regular debido a la falta de minerales esenciales.</li>
                                        <li>50 - 300 mg/L: Agua de baja a moderada mineralización, generalmente considerada buena para el consumo. Es el rango óptimo para agua potable.</li>
                                        <li>300 - 600 mg/L: Agua con niveles moderados de minerales. Aceptable para el consumo, pero puede tener un sabor notablemente diferente.</li>
                                        <li>600 - 900 mg/L: Agua de alta mineralización. Puede ser aceptable en algunas regiones, pero el sabor puede ser un factor de rechazo para algunos consumidores.</li>
                                        <li>900 - 1200 mg/L: Agua de muy alta mineralización. A menudo no es aceptable para el consumo humano debido al sabor y posibles efectos sobre la salud.</li>
                                        <li> 1200 mg/L: Generalmente no es adecuada para el consumo humano. Puede ser usada para otras aplicaciones industriales o agrícolas donde la calidad del agua no es crítica.</li>
                                    </ul>
                                    <p>Estos sensores están calibrados para proporcionar lecturas precisas y fiables, permitiendo un monitoreo continuo de la calidad del agua en diferentes condiciones y usos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            </body>
        </html>
    );
};
