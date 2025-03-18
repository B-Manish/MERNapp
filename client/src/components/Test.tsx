import React, { useEffect, useState } from "react";
import { ggroute } from "../apis/api";

const Test: React.FC = () => {
  const [apiData, setApiData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ggroute();
        setApiData(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <div>apiData:{apiData}</div>;
};

export default Test;
