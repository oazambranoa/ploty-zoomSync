import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const App = () => {
    const [layout, setLayout] = useState({
        autosize: true,
        title: 'A Fancy Plot',
        xaxis: { range: [1, 3] },
        yaxis: { range: [2, 6] },
    });

    const handleRelayout = (eventData) => {
        setLayout({
            ...layout,
            'xaxis.range': eventData['xaxis.range'],
            'yaxis.range': eventData['yaxis.range'],
        });
    };

    return (
        <div>
            <Plot
                data={[{ x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+markers', marker: { color: 'red' } }]}
                layout={layout}
                onRelayout={handleRelayout}
            />
            <Plot
                data={[{ x: [1, 2, 3], y: [2, 3, 5], type: 'scatter', mode: 'lines+markers', marker: { color: 'blue' } }]}
                layout={layout}
                onRelayout={handleRelayout}
            />
        </div>
    );
};

export default App;