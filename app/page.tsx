import TradingViewWidget from '@/components/TradingViewWidget';
import SignalsList from '@/components/SignalsList';
import NotificationPanel from '@/components/NotificationPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Forex Trading Signals</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-4 h-[600px]">
              <TradingViewWidget />
            </div>
          </div>
          
          <div className="space-y-8">
            <NotificationPanel />
            <SignalsList />
          </div>
        </div>
      </div>
    </main>
  );
}