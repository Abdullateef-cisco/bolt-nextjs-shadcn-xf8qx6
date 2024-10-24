"use client";

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

interface Signal {
  id: string;
  pair: string;
  type: 'buy' | 'sell';
  price: number;
  timestamp: string;
  status: 'active' | 'closed';
}

export default function SignalsList() {
  const [signals, setSignals] = useState<Signal[]>([]);

  useEffect(() => {
    // Simulated signals data
    const mockSignals: Signal[] = [
      {
        id: '1',
        pair: 'EUR/USD',
        type: 'buy',
        price: 1.0921,
        timestamp: new Date().toISOString(),
        status: 'active'
      },
      {
        id: '2',
        pair: 'GBP/USD',
        type: 'sell',
        price: 1.2645,
        timestamp: new Date().toISOString(),
        status: 'active'
      }
    ];

    setSignals(mockSignals);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Active Signals</h2>
      <div className="space-y-4">
        {signals.map((signal) => (
          <Card key={signal.id} className="p-4 bg-gray-700 border-none">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{signal.pair}</h3>
                <p className="text-sm text-gray-300">
                  {new Date(signal.timestamp).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={signal.type === 'buy' ? 'default' : 'destructive'}>
                  {signal.type === 'buy' ? (
                    <ArrowUpCircle className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownCircle className="w-4 h-4 mr-1" />
                  )}
                  {signal.type.toUpperCase()}
                </Badge>
                <span className="font-mono">{signal.price}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}