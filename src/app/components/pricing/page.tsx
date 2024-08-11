export default function Pricing() {
    return (
      <div className="py-16 text-white">
        
        <div className="flex flex-wrap justify-center gap-8 px-8">
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-6 w-1/4 flex flex-col justify-between h-[450px]">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <p className="text-5xl font-bold mb-4">$19.99</p>
            <p className="mb-4">Per Month</p>
            <ul className="mb-6 text-white">
              <li className="mb-2">1 Coaching Session</li>
              <li className="mb-2">Access to Basic Content</li>
              <li className="mb-2">Community Access</li>
            </ul>
            <button className="w-full bg-white text-indigo-700 py-2 px-4 rounded hover:bg-slate-200">
              Register
            </button>
          </div>
          <div className="bg-violet-600 text-white rounded-lg shadow-lg p-6 w-1/4 flex flex-col justify-between h-[450px]">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-5xl font-bold mb-4">$49.99</p>
            <p className="mb-4">Per Month</p>
            <ul className="mb-6 text-white">
              <li className="mb-2">4 Coaching Sessions</li>
              <li className="mb-2">Access to All Content</li>
              <li className="mb-2">Community Access</li>
              <li className="mb-2">Exclusive Events</li>
            </ul>
            <button className="w-full bg-white text-indigo-700 py-2 px-4 rounded hover:bg-slate-200">
              Register
            </button>
          </div>
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-6 w-1/4 flex flex-col justify-between h-[450px]">
            <h3 className="text-2xl font-bold mb-4">Elite</h3>
            <p className="text-5xl font-bold mb-4">$99.99</p>
            <p className="mb-4">Per Month</p>
            <ul className="mb-6 text-white">
              <li className="mb-2">Unlimited Coaching Sessions</li>
              <li className="mb-2">Access to All Content</li>
              <li className="mb-2">Community Access</li>
              <li className="mb-2">Exclusive Events</li>
              <li className="mb-2">Personalized Training Plan</li>
            </ul>
            <button className="w-full bg-white text-indigo-700 py-2 px-4 rounded hover:bg-slate-200">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  