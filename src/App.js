import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const App = () => {
    const [layout, setLayout] = useState({
        autosize: true,
        xaxis: { autorange: true },
        yaxis: { autorange: true },
        title: "FBE",
    });

    const handleRelayout = (eventData) => {
        const newYaxisRange = eventData['yaxis.range'] ? [0, eventData['yaxis.range'][1]] : layout.yaxis.range;
        setLayout({
            ...layout,
            'xaxis.range': eventData['xaxis.range'] || layout.xaxis.range,
            'yaxis.range': newYaxisRange,
        });
    };

    return (
        <div>
            <Plot
                data={[{ z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]], type: 'heatmap' }]}
                layout={layout}
                onRelayout={handleRelayout}
            />
            <Plot
                data={[{ z: [[1, 2, 3, 6, 7], [2, 3, 5, 5, 7], [3, 4, 5, 6, 7]], type: 'heatmap' }]}
                layout={{...layout, title: "FFT"}}
                onRelayout={handleRelayout}
            />
        </div>
    );
};

export default App;