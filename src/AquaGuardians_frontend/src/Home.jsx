import React from 'react';
import { useState } from 'react';
import { useRestActor, AuthButton } from "@bundly/ic-react";

export const Home = () => {
    const bnd = useRestActor("backend");

    const getDB = async () => {
        try {
            const res = await bnd.get("/obtener-datos");

        } catch (error) {
            console.log("Error", error)
        }
    }
    getDB()
    return (
        <html lang="es">
            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>AquaGuardian - Sensores de Calidad del Agua</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            </head>
            <body>
                <header class="header d-flex justify-content-between align-items-center">
                    <h1 class="ml-3">AquaGuardian</h1>
                </header>

                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h3>Información de Sensores</h3>
                                </div>
                                <div class="card-body">
                                    <p><strong>Sensor de PH:</strong> Mide el nivel de acidez o alcalinidad del agua.</p>
                                    <p><strong>Sensor de Turbidez:</strong> Mide la claridad del agua y detecta la presencia de partículas suspendidas.</p>
                                    <p><strong>Sensor de Conductividad:</strong> Mide la capacidad del agua para conducir electricidad, lo que indica la concentración de iones presentes en el agua.</p>
                                    <p>Estos sensores permiten monitorear la calidad del agua en tiempo real, asegurando que el agua reciclada cumpla con los estándares de calidad requeridos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h3>Gráfica de Calidad del Agua</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="waterQualityChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Información Detallada de Sensores</h3>
                                </div>
                                <div class="card-body">
                                    <p><strong>Sensor de PH:</strong> El nivel de pH mide la acidez o alcalinidad del agua. Es crucial mantener el pH en un rango adecuado para asegurar que el agua sea segura para su uso.</p>
                                    <p><strong>Sensor de Turbidez:</strong> La turbidez mide la claridad del agua. Un agua con alta turbidez puede contener partículas en suspensión que pueden afectar la calidad del agua y su idoneidad para ciertos usos.</p>
                                    <p><strong>Sensor de Conductividad:</strong> La conductividad mide la capacidad del agua para conducir electricidad, lo que está relacionado con la cantidad de iones disueltos en el agua. Es un indicador importante de la salinidad del agua.</p>
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
}