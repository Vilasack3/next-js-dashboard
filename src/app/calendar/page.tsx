import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CalendarBox from "@/components/CalenderBox";

export const metadata: Metadata = {
  title: "Calender Page",
  // other metadata
};

const CalendarPage = () => {
  return (
    <>
      <Breadcrumb pageName="Calendar" />

      <CalendarBox />
    </>
  );
};

export default CalendarPage;
