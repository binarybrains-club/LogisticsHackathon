import { useEffect, useState } from "react";
interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function updateCountdown() {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="flex gap-4 mb-8" id="countdown-container">
      <CounterBox value={timeLeft.days} label="Días" />
      <CounterBox value={timeLeft.hours} label="Horas" />
      <CounterBox value={timeLeft.minutes} label="Minutos" />
      <CounterBox value={timeLeft.seconds} label="Segundos" />
    </div>
  );
}
const formatNumber = (num: number) => num.toString().padStart(2, "0");
interface CounterBoxProps {
  value: number;
  label: string;
}
const CounterBox = ({ value, label }: CounterBoxProps) => (
  <div className="w-16 h-26 md:w-24 md:h-32">
    <div className="w-16 h-18 md:w-24 md:h-26 rounded-2xl relative liquid-glass">
      <div className="glass grid place-items-center size-full">
        <p className="text-3xl md:text-5xl text-white text-center font-bold count-number relative">
          {formatNumber(value)}
        </p>
      </div>
      <div className="mix-blend-overlay glass-border" />
      <div className="mix-blend-screen opacity-25 glass-border" />
    </div>
    <p className="text-center mt-2 text-sm md:text-lg font-bold count-label">
      {label}
    </p>
  </div>
);
