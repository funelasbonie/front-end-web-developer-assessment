import { useMemo } from "react";

export function useDeliveryDate(delivery) {
  return useMemo(() => {
    const parseBusinessDays = (str) => {
      const match = str.match(/(\d+)\s+Business\s+Day/);
      return match ? parseInt(match[1], 10) : 0;
    };

    const processingDays = parseBusinessDays(delivery.processing);
    const productionDays = parseBusinessDays(delivery.production);
    const transitDays = parseBusinessDays(delivery.transit);
    const totalBusinessDays = processingDays + productionDays + transitDays;

    const today = new Date();
    let currentDate = new Date(today);
    let businessDaysAdded = 0;

    while (businessDaysAdded < totalBusinessDays) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        businessDaysAdded++;
      }
    }

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return {
      month: monthNames[currentDate.getMonth()],
      day: currentDate.getDate().toString()
    };
  }, [delivery]);
}
