import React, { useEffect, useState, useRef } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';

interface MermaidProps {
    chart: string;
    className?: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart, className = '' }) => {
    const [svg, setSvg] = useState('');
    const { theme } = useTheme();
    const idRef = useRef(`mermaid-${Math.random().toString(36).substring(2, 9)}`);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: theme === 'light' ? 'default' : 'dark',
            securityLevel: 'loose',
        });

        const renderChart = async () => {
            try {
                const { svg: renderedSvg } = await mermaid.render(idRef.current, chart);
                setSvg(renderedSvg);
            } catch (error) {
                console.error('Mermaid rendering error:', error);
            }
        };
        renderChart();
    }, [chart, theme]);

    return (
        <div
            className={`flex justify-center overflow-x-auto w-full p-4 rounded-xl ${className}`}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};
